import { useEffect, useRef } from "react"

const GiscusComments = ({ config }) => {
  const ref = useRef()

  useEffect(() => {
    if (!config || config.provider !== "giscus") {
      return undefined
    }

    const script = document.createElement("script")

    const attributes = {
      src: "https://giscus.app/client.js",
      "data-repo": config.repo,
      "data-repo-id": config.repoId,
      "data-category": config.category,
      "data-category-id": config.categoryId,
      "data-mapping": config.mapping || "pathname",
      "data-strict": config.strict === false ? "0" : "1",
      "data-reactions-enabled": config.reactions === false ? "0" : "1",
      "data-emit-metadata": config.emitMetadata ? "1" : "0",
      "data-input-position": config.inputPosition || "top",
      "data-theme": config.theme || "light",
      "data-lang": config.language || "en",
      crossorigin: "anonymous",
      async: true,
    }

    Object.entries(attributes).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        script.setAttribute(key, value)
      }
    })

    const timer = setTimeout(() => {
      ref.current?.append(script)
    }, 300)

    return () => {
      clearTimeout(timer)
      script.remove()
    }
  }, [config])

  if (!config || config.provider !== "giscus") {
    return null
  }

  return <div ref={ref} />
}

export default GiscusComments
