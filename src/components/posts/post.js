import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from './post-layout'
import { graphql } from 'gatsby'

export default ({ data, pageContext, location }) => {
  return (
    <Layout
      title={data.mdx.frontmatter.title}
      description={data.mdx.frontmatter.excerpt}
      type="Article 📄"
      location={location}>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        excerpt
      }
    }
  }
`
