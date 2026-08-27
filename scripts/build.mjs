import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

import { build as viteBuild } from "vite"

import { withBasePath } from "../src/path-utils.js"
import {
  copyContentAssets,
  copyDirectory,
  loadSiteConfig,
  loadSiteData,
  writeSiteData,
} from "./blog-data.mjs"

export const engineRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
)

const escapeXml = value =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;")

const escapeAttribute = value => escapeXml(value).replaceAll("`", "&#96;")

const serializeForScript = value =>
  JSON.stringify(value)
    .replaceAll("<", "\\u003c")
    .replaceAll("\u2028", "\\u2028")
    .replaceAll("\u2029", "\\u2029")

export const buildPageData = siteData => {
  const listPost = post => ({
    slug: post.slug,
    title: post.title,
    date: post.date,
    dateISO: post.dateISO,
    description: post.description,
    excerpt: post.excerpt,
  })
  const linkedPost = post =>
    post
      ? {
          slug: post.slug,
          title: post.title,
        }
      : null

  const home = {
    type: "home",
    pathname: "/",
    site: siteData.site,
    posts: siteData.postsDescending.map(listPost),
    seo: {
      title: "All posts",
      description: siteData.site.description,
    },
  }

  const posts = siteData.posts.map(post => ({
    type: "post",
    pathname: post.slug,
    site: siteData.site,
    post,
    previous: linkedPost(siteData.postsBySlug[post.previousSlug]),
    next: linkedPost(siteData.postsBySlug[post.nextSlug]),
    seo: {
      title: post.title,
      description: post.description || post.excerpt,
    },
  }))

  const notFound = {
    type: "not-found",
    pathname: "/404/",
    site: siteData.site,
    seo: {
      title: "404: Not Found",
      description: siteData.site.description,
    },
  }

  return [home, ...posts, notFound]
}

const getOutputFile = (outputDir, page) => {
  if (page.type === "home") {
    return path.join(outputDir, "index.html")
  }

  const pathname = page.type === "not-found" ? "404" : page.pathname
  return path.join(outputDir, pathname.replace(/^\/+|\/+$/g, ""), "index.html")
}

const getClientTags = (manifest, basePath) => {
  const entry = manifest["src/entry-client.jsx"]

  if (!entry) {
    throw new Error("Vite manifest is missing src/entry-client.jsx")
  }

  const styles = (entry.css || [])
    .map(
      file => `<link rel="stylesheet" href="${withBasePath(file, basePath)}">`,
    )
    .join("\n    ")

  return {
    script: `<script type="module" src="${withBasePath(entry.file, basePath)}"></script>`,
    styles,
  }
}

const renderHtml = ({ head, html, page, template, tags }) => {
  const pageDataScript = `window.__SAOS_PAGE_DATA__ = ${serializeForScript(page)}`

  return template
    .replace(
      '<html lang="en">',
      `<html lang="${escapeAttribute(page.site.language)}">`,
    )
    .replace(
      "<!--blog-head-->",
      [tags.styles, head].filter(Boolean).join("\n    "),
    )
    .replace("<!--blog-html-->", html)
    .replace("window.__SAOS_PAGE_DATA__ = null", pageDataScript)
    .replace(
      '<script type="module" src="/src/entry-client.jsx"></script>',
      tags.script,
    )
}

const writeRss = async (siteData, outputDir) => {
  if (siteData.site.rss === false || !siteData.site.siteUrl) {
    return
  }

  const siteUrl = siteData.site.siteUrl.replace(/\/$/, "")
  const items = siteData.postsDescending
    .map(post => {
      const url = `${siteUrl}${withBasePath(post.slug, siteData.site.basePath)}`

      return [
        "<item>",
        `<title>${escapeXml(post.title)}</title>`,
        `<description>${escapeXml(post.description || post.excerpt)}</description>`,
        `<link>${escapeXml(url)}</link>`,
        `<guid>${escapeXml(url)}</guid>`,
        `<pubDate>${new Date(post.dateISO).toUTCString()}</pubDate>`,
        `<content:encoded><![CDATA[${post.html.replaceAll("]]>", "]]]]><![CDATA[>")}]]></content:encoded>`,
        "</item>",
      ].join("")
    })
    .join("\n")
  const title = siteData.site.rss.title || `${siteData.site.title} RSS Feed`
  const homeUrl = `${siteUrl}${siteData.site.basePath}`
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
<channel>
<title>${escapeXml(title)}</title>
<description>${escapeXml(siteData.site.description)}</description>
<link>${escapeXml(homeUrl)}</link>
${items}
</channel>
</rss>
`

  await fs.writeFile(path.join(outputDir, "rss.xml"), rss)
}

const writeWebManifest = async (siteData, outputDir) => {
  if (siteData.site.manifest === false) {
    return
  }

  const config = siteData.site.manifest
  const manifest = {
    name: siteData.site.title,
    short_name: config.shortName || siteData.site.title,
    start_url: siteData.site.basePath,
    background_color: config.backgroundColor || "#ffffff",
    display: config.display || "minimal-ui",
    icons: config.icons || [],
  }

  await fs.writeFile(
    path.join(outputDir, "manifest.webmanifest"),
    `${JSON.stringify(manifest, null, 2)}\n`,
  )
}

const resolveFrom = (root, value, fallback) =>
  path.resolve(root, value || fallback)

export const prepareSite = async ({
  workspaceRoot = engineRoot,
  content = "content/blog",
  config = "saos.config.mjs",
  base = "",
} = {}) => {
  const resolvedWorkspace = path.resolve(workspaceRoot)
  const contentDir = resolveFrom(resolvedWorkspace, content, "content/blog")
  const configPath = config
    ? resolveFrom(resolvedWorkspace, config, "saos.config.mjs")
    : null
  const buildDir = path.join(engineRoot, ".saos-build")
  const site = await loadSiteConfig({ configPath, basePath: base })
  const siteData = await loadSiteData({ contentDir, site })
  await writeSiteData({ buildDir, siteData })

  return { buildDir, contentDir, siteData, workspaceRoot: resolvedWorkspace }
}

export const buildBlog = async ({
  workspaceRoot = engineRoot,
  content = "content/blog",
  config = "saos.config.mjs",
  publicDir = "static",
  output = "dist",
  base = "",
} = {}) => {
  const prepared = await prepareSite({ workspaceRoot, content, config, base })
  const { buildDir, contentDir, siteData } = prepared
  const outputDir = resolveFrom(prepared.workspaceRoot, output, "dist")
  const consumerPublicDir = publicDir
    ? resolveFrom(prepared.workspaceRoot, publicDir, "static")
    : null
  const serverDir = path.join(buildDir, "server")

  await fs.rm(outputDir, { recursive: true, force: true })

  await viteBuild({
    root: engineRoot,
    configFile: path.join(engineRoot, "vite.config.js"),
    base: siteData.site.basePath,
    build: {
      outDir: outputDir,
      emptyOutDir: true,
      manifest: true,
      rollupOptions: {
        input: path.join(engineRoot, "src", "entry-client.jsx"),
      },
    },
  })

  await viteBuild({
    root: engineRoot,
    configFile: path.join(engineRoot, "vite.config.js"),
    build: {
      ssr: path.join(engineRoot, "src", "entry-server.jsx"),
      outDir: serverDir,
      emptyOutDir: true,
    },
  })

  const template = await fs.readFile(
    path.join(engineRoot, "index.html"),
    "utf8",
  )
  const manifest = JSON.parse(
    await fs.readFile(path.join(outputDir, ".vite", "manifest.json"), "utf8"),
  )
  const tags = getClientTags(manifest, siteData.site.basePath)
  const { renderPage } = await import(
    `${pathToFileURL(path.join(serverDir, "entry-server.js")).href}?${Date.now()}`
  )

  await fs.rm(path.join(outputDir, ".vite"), { recursive: true, force: true })

  await copyDirectory(path.join(engineRoot, "static"), outputDir)
  await copyDirectory(consumerPublicDir, outputDir)
  await copyContentAssets(contentDir, outputDir)

  for (const page of buildPageData(siteData)) {
    const rendered = renderPage(page)
    const outputFile = getOutputFile(outputDir, page)
    await fs.mkdir(path.dirname(outputFile), { recursive: true })
    await fs.writeFile(
      outputFile,
      renderHtml({ ...rendered, page, template, tags }),
    )
  }

  await fs.copyFile(
    path.join(outputDir, "404", "index.html"),
    path.join(outputDir, "404.html"),
  )
  await writeRss(siteData, outputDir)
  await writeWebManifest(siteData, outputDir)

  return {
    outputDir,
    postCount: siteData.posts.length,
    site: siteData.site,
  }
}
