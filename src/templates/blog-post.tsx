import * as React from 'react'
import Helmet from 'react-helmet'

export interface ITemplateProps { data: { markdownRemark: any, site: any } }
export default function Template({ data }: ITemplateProps) {
  const { markdownRemark: post, site } = data
  return (
    <div className="blog-post-container">
      <Helmet title={`${site.siteMetadata.siteName} - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
    site {
      siteMetadata {
        siteName
      }
    }
  }
`
