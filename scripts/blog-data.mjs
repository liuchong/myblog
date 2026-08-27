import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

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

import { siteMetadata } from "../src/site-metadata.js"

export const rootDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
)

export const buildDir = path.join(rootDir, ".blog-build")
export const dataPath = path.join(buildDir, "data.json")
export const distDir = path.join(rootDir, "dist")

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

const escapeHtml = value =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")

const normalizeSlug = value => `/${value.replace(/^\/+|\/+$/g, "")}/`

const parseMarkdownFile = source => {
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

const createExcerpt = markdown => {
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
        if (hasClassName(node, "gatsby-highlight")) {
          return child
        }

        return {
          type: "element",
          tagName: "div",
          properties: { className: ["gatsby-highlight"] },
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
        rehypeRaw,
        [rehypePrism, { ignoreMissing: true }],
        wrapCodeBlocks,
      ],
    }),
  )
  const { default: MdxContent } = await run(code, runtime)

  return renderToStaticMarkup(runtime.jsx(MdxContent, {}))
}

const getPostFile = async dirName => {
  const postDir = path.join(rootDir, "content", "blog", dirName)
  const candidates = ["index.md", "index.mdx"]

  for (const candidate of candidates) {
    const filePath = path.join(postDir, candidate)

    try {
      await fs.access(filePath)
      return {
        filePath,
        isMdx: candidate.endsWith(".mdx"),
      }
    } catch {}
  }

  return null
}

export const loadSiteData = async () => {
  const blogDir = path.join(rootDir, "content", "blog")
  const entries = await fs.readdir(blogDir, { withFileTypes: true })
  const postDirs = entries
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name)
    .sort()

  const posts = await Promise.all(
    postDirs.map(async dirName => {
      const postFile = await getPostFile(dirName)

      if (!postFile) {
        return null
      }

      const source = await fs.readFile(postFile.filePath, "utf8")
      const parsed = parseMarkdownFile(source)
      const slug = normalizeSlug(dirName)
      const title = parsed.data.title || slug
      const rawDate = parsed.data.date || ""
      const description = parsed.data.description || ""

      return {
        slug,
        title,
        date: formatDisplayDate(rawDate),
        dateISO:
          rawDate instanceof Date
            ? rawDate.toISOString()
            : new Date(String(rawDate)).toISOString(),
        description,
        excerpt: escapeHtml(description || createExcerpt(parsed.content)),
        html: postFile.isMdx
          ? await mdxToHtml(parsed.content)
          : await markdownToHtml(parsed.content),
      }
    }),
  )

  const postsAscending = posts.filter(Boolean).sort(
    (left, right) => new Date(left.dateISO) - new Date(right.dateISO),
  )

  postsAscending.forEach((post, index) => {
    post.previousSlug = postsAscending[index - 1]?.slug || null
    post.nextSlug = postsAscending[index + 1]?.slug || null
  })

  const postsDescending = [...postsAscending].sort(
    (left, right) => new Date(right.dateISO) - new Date(left.dateISO),
  )

  const postsBySlug = Object.fromEntries(
    postsAscending.map(post => [post.slug, post]),
  )

  return {
    site: siteMetadata,
    posts: postsAscending,
    postsDescending,
    postsBySlug,
  }
}

export const writeSiteData = async siteData => {
  await fs.mkdir(buildDir, { recursive: true })
  await fs.writeFile(`${dataPath}.tmp`, `${JSON.stringify(siteData, null, 2)}\n`)
  await fs.rename(`${dataPath}.tmp`, dataPath)
}

export const copyDirectory = async (from, to) => {
  try {
    await fs.access(from)
  } catch {
    return
  }

  await fs.cp(from, to, { recursive: true })
}
