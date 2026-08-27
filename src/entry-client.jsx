import "@fontsource-variable/montserrat"
import "@fontsource/merriweather"
import "./normalize.css"
import "./style.css"
import "prismjs/themes/prism.css"

import * as React from "react"
import { createRoot, hydrateRoot } from "react-dom/client"

import { App, resolvePage } from "./App"

const element = document.getElementById("root")

const getPage = async () => {
  if (window.__SAOS_PAGE_DATA__) {
    return window.__SAOS_PAGE_DATA__
  }

  if (import.meta.env.DEV) {
    const { default: siteData } = await import("../.saos-build/data.json")
    return resolvePage(window.location.pathname, siteData)
  }

  throw new Error("SAOS page data is missing")
}

const render = async () => {
  if (!element) {
    return
  }

  const page = await getPage()

  if (element.hasChildNodes()) {
    hydrateRoot(element, <App page={page} />)
  } else {
    createRoot(element).render(<App page={page} />)
  }
}

render()
