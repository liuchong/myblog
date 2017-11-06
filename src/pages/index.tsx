import * as React from 'react'
import Link from 'gatsby-link'

export default function index({ data }: any) {
  return (
    <div>
      <div>
        <div>
          <p>
            This is <a href="https://github.com/liuchong">刘冲</a>{'\''}s blog.
          </p>
        </div>

      </div>
      <div>
        <Link to="/posts/">Read</Link>
      </div>
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`
