/** @jsx jsx */
import React from 'react'
import Layout from '../../components/layout/layout'
import PostLink from '../../components/posts/post-link'
import { graphql } from 'gatsby'
import { PoemList } from '../../components/poems/poem-list'
import { jsx } from '@emotion/core'

const PoemIndex = ({ data, location }) => {
  return (
    <Layout
      title="All Poems"
      excerpt="All the poems posted on my website."
      type="📚"
      location={location}>
      <PoemList>
        {data.allMdx.edges.map(({ node: post }) => {
          let newPost = {
            slug: post.frontmatter.slug,
            title: post.frontmatter.title,
            body: post.body,
          }
          return <PostLink key={newPost.slug} {...newPost} />
        })}
      </PoemList>
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
          body
        }
      }
    }
  }
`
export default PoemIndex
