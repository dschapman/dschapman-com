/** @jsx jsx */
import React from 'react'
import { Styled, jsx } from 'theme-ui'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../layout/layout'

export default function PageTemplate({ data: { mdx }, location }) {
  return (
    <Layout
      title={mdx.frontmatter.title}
      description={mdx.frontmatter.excerpt}
      type="Poem 📜"
      location={location}>
      <MDXRenderer>{mdx.body}</MDXRenderer>
      <div>
        <Styled.a as={Link} to="/poetry/all">
          All Poems &rarr;{' '}
        </Styled.a>
      </div>
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
