/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import { useStaticQuery, graphql, Link } from 'gatsby'
import PostList from './posts/post-list'
import BlogList from './blog/blog-list'

export default function Featured() {
  const data = useStaticQuery(graphql`
    query {
      posts: allMdx(
        limit: 1000
        sort: { fields: frontmatter___date, order: DESC }
        filter: {
          frontmatter: { featured: { eq: true } }
          fileAbsolutePath: { regex: "/dschapman-com-content/posts/" }
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
          frontmatter: { featured: { eq: true } }
          fileAbsolutePath: { regex: "/dschapman-com-content/poems/" }
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
      blogs: allMdx(
        limit: 3
        sort: { fields: frontmatter___date, order: DESC }
        filter: { fileAbsolutePath: { regex: "/dschapman-com-content/blog/" } }
      ) {
        edges {
          node {
            slug
            excerpt
            frontmatter {
              title
              date
              tags
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <h2>Latest Blog Posts</h2>
      <BlogList posts={data.blogs.edges} />
      <h2>Featured Articles</h2>
      <PostList posts={data.posts.edges} type="article" />
      <h2>Featured Poems</h2>
      <PostList posts={data.poems.edges} type="poem" />
    </>
  )
}
