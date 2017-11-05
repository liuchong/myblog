import * as React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const ListLink = (props: any) => (
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children, data }: any) => (
  <div style={{ margin: '0 auto', maxWidth: 650, padding: '1.25rem 1rem' }}>
    <Helmet title={data.site.siteMetadata.siteName} />
    <header style={{ marginBottom: '1.5rem' }}>
      <Link to="/">
        <h3 style={{ display: 'inline' }}>{data.site.siteMetadata.siteName}</h3>
      </Link>
      <ul style={{ listStyle: 'none', float: 'right' }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/posts/">Posts</ListLink>
        <ListLink to="/about/">About</ListLink>
        <a href="mailto:mail at clojure dot cn">Contact</a>
      </ul>
    </header>
    {children()}
  </div>
)

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`
