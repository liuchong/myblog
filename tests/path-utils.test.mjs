import assert from "node:assert/strict"
import test from "node:test"

import {
  normalizeBasePath,
  stripBasePath,
  withBasePath,
} from "../src/path-utils.js"

test("normalizes URL base paths", () => {
  assert.equal(normalizeBasePath(""), "/")
  assert.equal(normalizeBasePath("project"), "/project/")
  assert.equal(normalizeBasePath("/project/"), "/project/")
})

test("adds and removes URL base paths", () => {
  assert.equal(withBasePath("/post/", "/project/"), "/project/post/")
  assert.equal(
    withBasePath("assets/app.js", "/project/"),
    "/project/assets/app.js",
  )
  assert.equal(
    withBasePath("https://example.com", "/project/"),
    "https://example.com",
  )
  assert.equal(stripBasePath("/project/post/", "/project/"), "/post/")
  assert.equal(stripBasePath("/project", "/project/"), "/")
})
