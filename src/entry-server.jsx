import * as React from "react"
import { renderToStaticMarkup, renderToString } from "react-dom/server"

import { App } from "./App"
import Seo from "./components/seo.jsx"

export const renderPage = page => {
  const description = page.seo.description || page.site.description
  const head = renderToStaticMarkup(
    <Seo
      defaultTitle={page.site.title}
      description={description}
      title={page.seo.title}
    />,
  )

  return {
    head,
    html: renderToString(<App page={page} />),
  }
}
