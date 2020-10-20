/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { useStaticQuery, graphql, Link } from 'gatsby'
import PostList from './posts/post-list'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        limit: 1000
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { tags: { in: "featured" } } }
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
  `)
  return (
    <>
      <h2>Featured Articles</h2>
      <PostList posts={data.allMdx.edges} />
    </>
  )
}
