/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import BlogList from './blog-list'

export default function BlogIndex() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: {
          frontmatter: { published: { eq: true } }
          fileAbsolutePath: { regex: "/content/blog/" }
        }
        sort: { fields: frontmatter___date, order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            id
            slug
            frontmatter {
              excerpt
              title
              date
              tags
              published
            }
            excerpt
          }
        }
      }
    }
  `)
  return <BlogList posts={data.allMdx.edges} type="article" />
}
