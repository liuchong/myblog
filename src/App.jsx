import * as React from "react"

import Bio from "./components/bio.jsx"
import GiscusComments from "./components/giscus-comments.jsx"
import Layout from "./components/layout.jsx"
import { stripBasePath, withBasePath } from "./path-utils.js"

const Link = ({ basePath, to, ...props }) => (
  <a href={withBasePath(to, basePath)} {...props} />
)

export const normalizePathname = (pathname, basePath = "/") => {
  const pathWithoutBase = stripBasePath(pathname, basePath)

  if (!pathWithoutBase || pathWithoutBase === "/index.html") {
    return "/"
  }

  const withoutIndex = pathWithoutBase.replace(/index\.html$/, "")
  return withoutIndex.endsWith("/") ? withoutIndex : `${withoutIndex}/`
}

export const resolvePage = (pathname, siteData) => {
  const normalizedPathname = normalizePathname(pathname, siteData.site.basePath)

  if (normalizedPathname === "/") {
    return {
      type: "home",
      pathname: "/",
      site: siteData.site,
      posts: siteData.postsDescending,
      seo: {
        title: "All posts",
        description: siteData.site.description,
      },
    }
  }

  const post = siteData.posts.find(item => item.slug === normalizedPathname)

  if (post) {
    return {
      type: "post",
      pathname: post.slug,
      site: siteData.site,
      post,
      previous: siteData.postsBySlug[post.previousSlug] || null,
      next: siteData.postsBySlug[post.nextSlug] || null,
      seo: {
        title: post.title,
        description: post.description || post.excerpt,
      },
    }
  }

  return {
    type: "not-found",
    pathname: normalizedPathname,
    site: siteData.site,
    seo: {
      title: "404: Not Found",
      description: siteData.site.description,
    },
  }
}

const BlogIndex = ({ page }) => {
  const { site, posts } = page
  const siteTitle = site?.title || "Title"

  if (posts.length === 0) {
    return (
      <Layout pathname={page.pathname} site={site} title={siteTitle}>
        <Bio author={site.author} basePath={site.basePath} />
        <p>No blog posts found.</p>
      </Layout>
    )
  }

  return (
    <Layout pathname={page.pathname} site={site} title={siteTitle}>
      <Bio author={site.author} basePath={site.basePath} />
      <ol style={{ listStyle: "none" }}>
        {posts.map(post => {
          const title = post.title || post.slug

          return (
            <li key={post.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link
                      basePath={site.basePath}
                      to={post.slug}
                      itemProp="url"
                    >
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

const BlogPost = ({ page }) => {
  const siteTitle = page.site?.title || "Title"

  return (
    <Layout pathname={page.pathname} site={page.site} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{page.post.title}</h1>
          <p>{page.post.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: page.post.html }}
          itemProp="articleBody"
        />
        <hr />
        <GiscusComments config={page.site.comments} />
        <footer>
          <Bio author={page.site.author} basePath={page.site.basePath} />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            listStyle: "none",
            padding: 0,
          }}
        >
          <li>
            {page.previous && (
              <Link
                basePath={page.site.basePath}
                to={page.previous.slug}
                rel="prev"
              >
                ← {page.previous.title}
              </Link>
            )}
          </li>
          <li>
            {page.next && (
              <Link
                basePath={page.site.basePath}
                to={page.next.slug}
                rel="next"
              >
                {page.next.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

const NotFoundPage = ({ page }) => {
  const siteTitle = page.site?.title || "Title"

  return (
    <Layout pathname={page.pathname} site={page.site} title={siteTitle}>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export const App = ({ page }) => {
  if (page.type === "post") {
    return <BlogPost page={page} />
  }

  if (page.type === "not-found") {
    return <NotFoundPage page={page} />
  }

  return <BlogIndex page={page} />
}
