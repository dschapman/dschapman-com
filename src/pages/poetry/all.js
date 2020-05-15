/** @jsx jsx */
import React from 'react'
import Layout from '../../components/layout/layout'
import PostLink from '../../components/posts/post-link'
import { graphql } from 'gatsby'

import { Styled, jsx } from 'theme-ui'

const PoemIndex = ({ data, location }) => {
  return (
    <Layout
      title="All Poems"
      excerpt="All the poems posted on my website."
      type="📚"
      location={location}>
      <Styled.ul
        sx={{
          variant: 'styles.postlist',
        }}>
        {data.allMdx.edges.map(({ node: post }) => (
          <PostLink key={post.frontmatter.slug} {...post.frontmatter} />
        ))}
      </Styled.ul>
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
          }
        }
      }
    }
  }
`
export default PoemIndex
