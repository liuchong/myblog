const externalUrlPattern = /^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i

export const normalizeBasePath = value => {
  const raw = String(value || "/").trim()

  if (!raw || raw === "/") {
    return "/"
  }

  return `/${raw.replace(/^\/+|\/+$/g, "")}/`
}

export const withBasePath = (pathname, basePath = "/") => {
  const value = String(pathname || "/")

  if (externalUrlPattern.test(value)) {
    return value
  }

  const normalizedBase = normalizeBasePath(basePath)
  const normalizedPath = value.startsWith("/") ? value : `/${value}`

  if (normalizedBase === "/") {
    return normalizedPath
  }

  return `${normalizedBase.slice(0, -1)}${normalizedPath}`
}

export const stripBasePath = (pathname, basePath = "/") => {
  const normalizedBase = normalizeBasePath(basePath)
  const value = String(pathname || "/")

  if (normalizedBase === "/") {
    return value
  }

  const baseWithoutSlash = normalizedBase.slice(0, -1)

  if (value === baseWithoutSlash) {
    return "/"
  }

  if (value.startsWith(normalizedBase)) {
    return `/${value.slice(normalizedBase.length)}`
  }

  return value
}
