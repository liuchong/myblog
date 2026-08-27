import * as React from "react"

const Layout = ({ pathname, title, children }) => {
  const isRootPath = pathname === "/"
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <a href="/">{title}</a>
      </h1>
    )
  } else {
    header = (
      <a className="header-link-home" href="/">
        {title}
      </a>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://vite.dev">Vite</a>
      </footer>
    </div>
  )
}

export default Layout
