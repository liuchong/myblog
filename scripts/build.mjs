import fs from "node:fs/promises"
import path from "node:path"
import { pathToFileURL } from "node:url"

import { build as viteBuild } from "vite"

import {
  buildDir,
  copyDirectory,
  distDir,
  loadSiteData,
  rootDir,
  writeSiteData,
} from "./blog-data.mjs"

const serverDir = path.join(buildDir, "server")

const escapeXml = value =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;")

const serializeForScript = value =>
  JSON.stringify(value).replaceAll("<", "\\u003c")

const buildPageData = siteData => {
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

const getOutputFile = page => {
  if (page.type === "home") {
    return path.join(distDir, "index.html")
  }

  if (page.type === "not-found") {
    return path.join(distDir, "404", "index.html")
  }

  return path.join(distDir, page.pathname, "index.html")
}

const getClientTags = manifest => {
  const entry = manifest["src/entry-client.jsx"]
  const styles = (entry.css || [])
    .map(file => `<link rel="stylesheet" href="/${file}">`)
    .join("\n    ")

  return {
    script: `<script type="module" src="/${entry.file}"></script>`,
    styles,
  }
}

const renderHtml = ({ head, html, page, template, tags }) => {
  const pageDataScript = `window.__BLOG_PAGE_DATA__ = ${serializeForScript(
    page,
  )}`

  return template
    .replace("<!--blog-head-->", [tags.styles, head].filter(Boolean).join("\n    "))
    .replace("<!--blog-html-->", html)
    .replace("window.__BLOG_PAGE_DATA__ = null", pageDataScript)
    .replace(
      '<script type="module" src="/src/entry-client.jsx"></script>',
      tags.script,
    )
}

const writeRss = async siteData => {
  const siteUrl = siteData.site.siteUrl.replace(/\/$/, "")
  const items = siteData.postsDescending
    .map(post => {
      const url = `${siteUrl}${post.slug}`

      return [
        "<item>",
        `<title>${escapeXml(post.title)}</title>`,
        `<description>${escapeXml(post.description || post.excerpt)}</description>`,
        `<link>${escapeXml(url)}</link>`,
        `<guid>${escapeXml(url)}</guid>`,
        `<pubDate>${new Date(post.dateISO).toUTCString()}</pubDate>`,
        `<content:encoded><![CDATA[${post.html}]]></content:encoded>`,
        "</item>",
      ].join("")
    })
    .join("\n")

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
<channel>
<title>黑貓博客 RSS Feed</title>
<description>${escapeXml(siteData.site.description)}</description>
<link>${escapeXml(siteUrl)}/</link>
${items}
</channel>
</rss>
`

  await fs.writeFile(path.join(distDir, "rss.xml"), rss)
}

const writeWebManifest = async siteData => {
  const manifest = {
    name: siteData.site.title,
    short_name: "bkb",
    start_url: "/",
    background_color: "#ffffff",
    display: "minimal-ui",
    icons: [
      {
        src: "/images/profile-pic.png",
        sizes: "1200x1200",
        type: "image/png",
      },
    ],
  }

  await fs.writeFile(
    path.join(distDir, "manifest.webmanifest"),
    `${JSON.stringify(manifest, null, 2)}\n`,
  )
}

const main = async () => {
  const siteData = await loadSiteData()
  await writeSiteData(siteData)
  await fs.rm(distDir, { recursive: true, force: true })

  await viteBuild({
    root: rootDir,
    configFile: path.join(rootDir, "vite.config.js"),
    build: {
      outDir: distDir,
      emptyOutDir: true,
      manifest: true,
      rollupOptions: {
        input: path.join(rootDir, "src", "entry-client.jsx"),
      },
    },
  })

  await viteBuild({
    root: rootDir,
    configFile: path.join(rootDir, "vite.config.js"),
    build: {
      ssr: path.join(rootDir, "src", "entry-server.jsx"),
      outDir: serverDir,
      emptyOutDir: true,
    },
  })

  const template = await fs.readFile(path.join(rootDir, "index.html"), "utf8")
  const manifest = JSON.parse(
    await fs.readFile(path.join(distDir, ".vite", "manifest.json"), "utf8"),
  )
  const tags = getClientTags(manifest)
  const { renderPage } = await import(
    `${pathToFileURL(path.join(serverDir, "entry-server.js")).href}?${Date.now()}`
  )

  await copyDirectory(path.join(rootDir, "static"), distDir)
  await copyDirectory(path.join(rootDir, "src", "images"), path.join(distDir, "images"))

  for (const page of buildPageData(siteData)) {
    const rendered = renderPage(page)
    const outputFile = getOutputFile(page)
    await fs.mkdir(path.dirname(outputFile), { recursive: true })
    await fs.writeFile(
      outputFile,
      renderHtml({ ...rendered, page, template, tags }),
    )
  }

  await fs.copyFile(
    path.join(distDir, "404", "index.html"),
    path.join(distDir, "404.html"),
  )
  await writeRss(siteData)
  await writeWebManifest(siteData)

  console.log(`Built ${siteData.posts.length} posts into dist.`)
}

await main()
