/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { useStaticQuery, graphql, Link } from 'gatsby'
import PostList from './posts/post-list'

export default function Featured() {
  const data = useStaticQuery(graphql`
    query {
      posts: allMdx(
        limit: 1000
        sort: { fields: frontmatter___date, order: DESC }
        filter: {
          frontmatter: { tags: { in: "featured" } }
          fileAbsolutePath: { regex: "/content/dschapman-com-content/posts/" }
        }
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
      poems: allMdx(
        limit: 1000
        sort: { fields: frontmatter___title, order: DESC }
        filter: {
          frontmatter: { tags: { in: "featured" } }
          fileAbsolutePath: { regex: "/content/dschapman-com-content/poems/" }
        }
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
      <PostList posts={data.posts.edges} type="article" />
      <h2>Featured Poems</h2>
      <PostList posts={data.poems.edges} type="poem" />
    </>
  )
}
