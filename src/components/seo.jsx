import * as React from "react"

const Seo = ({ defaultTitle, description, title, children }) => {
  const fullTitle = defaultTitle ? `${title} | ${defaultTitle}` : title

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {children}
    </>
  )
}

export default Seo
