import fs from "node:fs/promises"
import path from "node:path"
import { pathToFileURL } from "node:url"

import { compile, run } from "@mdx-js/mdx"
import * as runtime from "react/jsx-runtime"
import { renderToStaticMarkup } from "react-dom/server"
import rehypePrism from "rehype-prism-plus"
import rehypeRaw from "rehype-raw"
import rehypeStringify from "rehype-stringify"
import remarkGfm from "remark-gfm"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { unified } from "unified"
import { parse as parseYaml } from "yaml"

import { normalizeBasePath } from "../src/path-utils.js"

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export const defaultSiteConfig = {
  title: "SAOS Blog",
  description: "A source-first blog.",
  siteUrl: "",
  basePath: "/",
  language: "en",
  author: {
    name: "",
    summary: "",
    avatar: "",
    avatarAlt: "Profile picture",
    link: null,
  },
  comments: null,
  footer: {
    label: "SAOS",
    href: "https://github.com/liuchong/saos",
  },
  rss: {},
  manifest: {
    shortName: "SAOS",
    backgroundColor: "#ffffff",
    display: "minimal-ui",
    icons: [],
  },
}

const escapeHtml = value =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")

export const normalizeSlug = value =>
  `/${String(value).replace(/^\/+|\/+$/g, "")}/`

export const parseMarkdownFile = source => {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/)

  if (!match) {
    return {
      content: source,
      data: {},
    }
  }

  return {
    content: source.slice(match[0].length),
    data: parseYaml(match[1]) || {},
  }
}

const formatDisplayDate = value => {
  const raw = value instanceof Date ? value.toISOString() : String(value)
  const match = raw.match(/^(\d{4})-(\d{2})-(\d{2})/)

  if (!match) {
    return raw
  }

  const [, year, month, day] = match
  return `${monthNames[Number(month) - 1]} ${day}, ${year}`
}

export const createExcerpt = markdown => {
  const text = markdown
    .replace(/```[\s\S]*?```/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/[#>*_`[\]()!-]/g, "")
    .replace(/\s+/g, " ")
    .trim()

  return text.length > 160 ? `${text.slice(0, 157)}...` : text
}

const hasClassName = (node, name) => {
  const className = node?.properties?.className

  if (Array.isArray(className)) {
    return className.includes(name)
  }

  return className === name
}

const wrapCodeBlocks = () => tree => {
  const visit = node => {
    if (!Array.isArray(node.children)) {
      return
    }

    node.children = node.children.map(child => {
      visit(child)

      if (child.type === "element" && child.tagName === "pre") {
        if (hasClassName(node, "saos-highlight")) {
          return child
        }

        return {
          type: "element",
          tagName: "div",
          properties: { className: ["saos-highlight"] },
          children: [child],
        }
      }

      return child
    })
  }

  visit(tree)
}

const markdownProcessor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypePrism, { ignoreMissing: true })
  .use(wrapCodeBlocks)
  .use(rehypeStringify, { allowDangerousHtml: true })

const markdownToHtml = async markdown => {
  const file = await markdownProcessor.process(markdown)
  return String(file)
}

const mdxToHtml = async mdx => {
  const code = String(
    await compile(mdx, {
      outputFormat: "function-body",
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        [rehypePrism, { ignoreMissing: true }],
        wrapCodeBlocks,
      ],
    }),
  )
  const { default: MdxContent } = await run(code, runtime)

  return renderToStaticMarkup(runtime.jsx(MdxContent, {}))
}

const mergeSiteConfig = raw => ({
  ...defaultSiteConfig,
  ...raw,
  author: {
    ...defaultSiteConfig.author,
    ...(raw.author || {}),
  },
  footer:
    raw.footer === false
      ? false
      : {
          ...defaultSiteConfig.footer,
          ...(raw.footer || {}),
        },
  rss: raw.rss === false ? false : { ...(raw.rss || {}) },
  manifest:
    raw.manifest === false
      ? false
      : {
          ...defaultSiteConfig.manifest,
          ...(raw.manifest || {}),
        },
  basePath: normalizeBasePath(raw.basePath || defaultSiteConfig.basePath),
})

export const loadSiteConfig = async ({ configPath, basePath } = {}) => {
  let raw = {}

  if (configPath) {
    try {
      await fs.access(configPath)
      const moduleUrl = `${pathToFileURL(configPath).href}?${Date.now()}`
      const loaded = await import(moduleUrl)
      raw = loaded.default || loaded.site || {}
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw error
      }
    }
  }

  if (basePath) {
    raw = { ...raw, basePath }
  }

  return mergeSiteConfig(raw)
}

const walkMarkdownFiles = async directory => {
  const entries = await fs.readdir(directory, { withFileTypes: true })
  const files = await Promise.all(
    entries
      .filter(entry => !entry.name.startsWith("."))
      .map(async entry => {
        const entryPath = path.join(directory, entry.name)

        if (entry.isDirectory()) {
          return walkMarkdownFiles(entryPath)
        }

        return /\.mdx?$/i.test(entry.name) ? [entryPath] : []
      }),
  )

  return files.flat().sort()
}

const getDefaultSlug = (contentDir, filePath) => {
  const relative = path.relative(contentDir, filePath)
  const parsed = path.parse(relative)
  const parts =
    parsed.name === "index" ? parsed.dir : path.join(parsed.dir, parsed.name)
  return normalizeSlug(parts.split(path.sep).join("/"))
}

const parsePostDate = (value, relativePath) => {
  if (!value) {
    throw new Error(`${relativePath}: frontmatter field "date" is required`)
  }

  const date = value instanceof Date ? value : new Date(String(value))

  if (Number.isNaN(date.getTime())) {
    throw new Error(`${relativePath}: invalid frontmatter date "${value}"`)
  }

  return date
}

export const loadSiteData = async ({ contentDir, site }) => {
  const postFiles = await walkMarkdownFiles(contentDir)
  const posts = await Promise.all(
    postFiles.map(async filePath => {
      const relativePath = path.relative(contentDir, filePath)
      const source = await fs.readFile(filePath, "utf8")
      const parsed = parseMarkdownFile(source)

      if (parsed.data.draft === true) {
        return null
      }

      const slug = parsed.data.slug
        ? normalizeSlug(parsed.data.slug)
        : getDefaultSlug(contentDir, filePath)
      const title = parsed.data.title || slug
      const date = parsePostDate(parsed.data.date, relativePath)
      const description = parsed.data.description || ""

      return {
        slug,
        title,
        date: formatDisplayDate(date),
        dateISO: date.toISOString(),
        description,
        excerpt: escapeHtml(description || createExcerpt(parsed.content)),
        html: filePath.endsWith(".mdx")
          ? await mdxToHtml(parsed.content)
          : await markdownToHtml(parsed.content),
      }
    }),
  )

  const postsAscending = posts
    .filter(Boolean)
    .sort((left, right) => new Date(left.dateISO) - new Date(right.dateISO))
  const seenSlugs = new Set()

  postsAscending.forEach((post, index) => {
    if (seenSlugs.has(post.slug)) {
      throw new Error(`Duplicate post slug: ${post.slug}`)
    }

    seenSlugs.add(post.slug)
    post.previousSlug = postsAscending[index - 1]?.slug || null
    post.nextSlug = postsAscending[index + 1]?.slug || null
  })

  const postsDescending = [...postsAscending].reverse()
  const postsBySlug = Object.fromEntries(
    postsAscending.map(post => [post.slug, post]),
  )

  return {
    site,
    posts: postsAscending,
    postsDescending,
    postsBySlug,
  }
}

export const writeSiteData = async ({ buildDir, siteData }) => {
  const dataPath = path.join(buildDir, "data.json")
  await fs.mkdir(buildDir, { recursive: true })
  await fs.writeFile(
    `${dataPath}.tmp`,
    `${JSON.stringify(siteData, null, 2)}\n`,
  )
  await fs.rename(`${dataPath}.tmp`, dataPath)
  return dataPath
}

export const copyDirectory = async (from, to, options = {}) => {
  if (!from) {
    return
  }

  try {
    await fs.access(from)
  } catch {
    return
  }

  await fs.cp(from, to, {
    recursive: true,
    filter: source =>
      path.basename(source) !== ".DS_Store" &&
      (options.filter ? options.filter(source) : true),
  })
}

export const copyContentAssets = async (contentDir, outputDir) => {
  await copyDirectory(contentDir, outputDir, {
    filter: source => {
      const extension = path.extname(source).toLowerCase()
      return extension !== ".md" && extension !== ".mdx"
    },
  })
}
