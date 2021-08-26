/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import { useStaticQuery, graphql, Link } from 'gatsby'
import PostList from './posts/post-list'

export default function LatestArticles() {
  const data = useStaticQuery(graphql`
    query {
      posts: allMdx(
        limit: 5
        sort: { fields: frontmatter___date, order: DESC }
        filter: { fileAbsolutePath: { regex: "/dschapman-com-content/posts/" } }
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
  return <PostList posts={data.posts.edges} type="article" />
}
