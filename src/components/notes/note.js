/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../layout/layout'
import { graphql } from 'gatsby'

export default ({ data, pageContext, location }) => {
  return (
    <Layout
      title={data.mdx.frontmatter.title}
      description={data.mdx.frontmatter.excerpt}
      type="Note 📝"
      location={location}>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query NoteQuery($id: String) {
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
