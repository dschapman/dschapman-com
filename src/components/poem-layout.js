import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from './layout'

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout title={mdx.frontmatter.title} description={mdx.frontmatter.excerpt}>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PoemQuery($id: String) {
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
