import * as React from "react"

import { withBasePath } from "../path-utils.js"

const Layout = ({ pathname, site, title, children }) => {
  const isRootPath = pathname === "/"
  const homeUrl = withBasePath("/", site?.basePath)
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <a href={homeUrl}>{title}</a>
      </h1>
    )
  } else {
    header = (
      <a className="header-link-home" href={homeUrl}>
        {title}
      </a>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      {site?.footer !== false && (
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href={site?.footer?.href}>{site?.footer?.label || "SAOS"}</a>
        </footer>
      )}
    </div>
  )
}

export default Layout
