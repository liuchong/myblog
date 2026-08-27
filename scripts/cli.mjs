import fs from "node:fs/promises"
import path from "node:path"

import { createServer } from "vite"

import { buildBlog, engineRoot, prepareSite } from "./build.mjs"

const parseArguments = arguments_ => {
  const options = {}

  for (let index = 0; index < arguments_.length; index += 1) {
    const argument = arguments_[index]

    if (!argument.startsWith("--")) {
      throw new Error(`Unexpected argument: ${argument}`)
    }

    const key = argument.slice(2)
    const value = arguments_[index + 1]

    if (!value || value.startsWith("--")) {
      throw new Error(`Missing value for --${key}`)
    }

    options[key] = value
    index += 1
  }

  return options
}

const command = process.argv[2] || "build"
const arguments_ = parseArguments(process.argv.slice(3))
const workspaceRoot = path.resolve(arguments_.workspace || process.cwd())
const buildOptions = {
  workspaceRoot,
  content: arguments_.content || "content/blog",
  config: arguments_.config || "saos.config.mjs",
  publicDir: arguments_.public || "static",
  output: arguments_.output || "dist",
  base: arguments_.base || "",
}

if (command === "build") {
  const result = await buildBlog(buildOptions)
  console.log(`Built ${result.postCount} posts into ${result.outputDir}.`)
} else if (command === "prepare") {
  const result = await prepareSite(buildOptions)
  console.log(`Prepared ${result.siteData.posts.length} blog posts.`)
} else if (command === "develop") {
  const result = await prepareSite(buildOptions)
  const server = await createServer({
    root: engineRoot,
    configFile: path.join(engineRoot, "vite.config.js"),
    base: result.siteData.site.basePath,
    publicDir: path.resolve(workspaceRoot, buildOptions.publicDir),
    server: {
      host: "127.0.0.1",
    },
  })
  await server.listen()
  server.printUrls()
} else if (command === "clean") {
  await Promise.all([
    fs.rm(path.join(engineRoot, ".saos-build"), {
      recursive: true,
      force: true,
    }),
    fs.rm(path.resolve(workspaceRoot, buildOptions.output), {
      recursive: true,
      force: true,
    }),
  ])
  console.log("Cleaned generated files.")
} else {
  throw new Error(`Unknown command: ${command}`)
}
