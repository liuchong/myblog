import assert from "node:assert/strict"
import fs from "node:fs/promises"
import os from "node:os"
import path from "node:path"
import test from "node:test"
import { fileURLToPath } from "node:url"

import { parse as parseYaml } from "yaml"

import { buildBlog } from "../scripts/build.mjs"

const repositoryRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
)

test("builds an external Markdown and MDX workspace", async context => {
  const temporaryRoot = await fs.mkdtemp(path.join(os.tmpdir(), "saos-test-"))
  context.after(() => fs.rm(temporaryRoot, { recursive: true, force: true }))

  await fs.cp(path.join(repositoryRoot, "examples", "basic"), temporaryRoot, {
    recursive: true,
  })

  const result = await buildBlog({
    workspaceRoot: temporaryRoot,
    output: "dist",
  })
  const outputDir = path.join(temporaryRoot, "dist")
  const home = await fs.readFile(path.join(outputDir, "index.html"), "utf8")
  const post = await fs.readFile(
    path.join(outputDir, "hello", "index.html"),
    "utf8",
  )
  const mdxPost = await fs.readFile(
    path.join(outputDir, "expressive", "index.html"),
    "utf8",
  )
  const rss = await fs.readFile(path.join(outputDir, "rss.xml"), "utf8")
  const manifest = JSON.parse(
    await fs.readFile(path.join(outputDir, "manifest.webmanifest"), "utf8"),
  )

  assert.equal(result.postCount, 2)
  assert.match(home, /SAOS Example/)
  assert.match(home, /href="\/journal\/hello\/"/)
  assert.match(home, /href="\/journal\/assets\//)
  assert.match(home, /Built with<!-- --> <a href="https:\/\/vite\.dev">Vite<\/a>/)
  assert.match(home, /and <a href="https:\/\/github\.com\/liuchong\/saos">SAOS<\/a>/)
  assert.match(post, /This post is written in/)
  assert.match(post, /"repo":"example\/saos-site"/)
  assert.match(mdxPost, /<strong>MDX element<\/strong>/)
  assert.match(rss, /https:\/\/example\.com\/journal\/hello\//)
  assert.equal(manifest.start_url, "/journal/")
  assert.equal(
    await fs.readFile(path.join(outputDir, "hello", "attachment.txt"), "utf8"),
    "This asset is copied alongside the generated post.\n",
  )
  assert.match(
    await fs.readFile(path.join(outputDir, "robots.txt"), "utf8"),
    /User-agent/,
  )
  await assert.rejects(
    fs.access(path.join(outputDir, ".vite", "manifest.json")),
  )
})

test("declares a valid composite action contract", async () => {
  const metadata = parseYaml(
    await fs.readFile(path.join(repositoryRoot, "action.yml"), "utf8"),
  )

  assert.equal(metadata.name, "SAOS Blog")
  assert.equal(metadata.runs.using, "composite")
  assert.equal(metadata.inputs.content.default, "content/blog")
  assert.equal(
    metadata.outputs["output-path"].value,
    "${{ steps.build.outputs.output-path }}",
  )
})
