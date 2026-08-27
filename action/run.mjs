import fs from "node:fs/promises"
import path from "node:path"

import { buildBlog } from "../scripts/build.mjs"

const workspaceRoot = process.env.SAOS_WORKSPACE || process.cwd()
const result = await buildBlog({
  workspaceRoot,
  content: process.env.SAOS_CONTENT || "content/blog",
  config: process.env.SAOS_CONFIG || "saos.config.mjs",
  publicDir: process.env.SAOS_PUBLIC || "static",
  output: process.env.SAOS_OUTPUT || "dist",
  base: process.env.SAOS_BASE || "",
})

if (process.env.GITHUB_OUTPUT) {
  await fs.appendFile(
    process.env.GITHUB_OUTPUT,
    `output-path=${result.outputDir}\npost-count=${result.postCount}\n`,
  )
}

console.log(
  `SAOS built ${result.postCount} post${result.postCount === 1 ? "" : "s"} into ${path.relative(workspaceRoot, result.outputDir) || "."}.`,
)
