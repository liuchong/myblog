import fs from "node:fs/promises"

import { buildDir, distDir } from "./blog-data.mjs"

await Promise.all([
  fs.rm(buildDir, { recursive: true, force: true }),
  fs.rm(distDir, { recursive: true, force: true }),
])

console.log("Cleaned generated files.")
