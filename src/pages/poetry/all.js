/** @jsx jsx */
import React from 'react'
import Layout from '../../components/layout/layout'
import PostList from '../../components/posts/post-list'
import { graphql } from 'gatsby'
import { PoemList } from '../../components/poems/poem-list'
import { jsx } from '@emotion/react'

const PoemIndex = ({ data, location }) => {
  return (
    <Layout
      title="All Poems"
      excerpt="All the poems posted on my website."
      type="📚"
      location={location}>
      <PostList posts={data.allMdx.edges} type="poem" />
    </Layout>
  )
}
export const pageQuery = graphql`
  query poemIndex {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/poems/" } }
      sort: { fields: frontmatter___title, order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            excerpt
            tags
          }
        }
      }
    }
  }
`
export default PoemIndex
