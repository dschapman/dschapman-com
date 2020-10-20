/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { InternalLink } from './layout/links'
import colors from '../lib/colors'

const PostList = styled.ul`
  list-style-type: none;
  padding: 4px;
  margin: 0;
`

const PostLink = styled.li`
  padding: 0.25rem;
  margin: 4px 0;
  display: block;
  width: fit-content;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.01);
  transition: all 200ms ease-in-out;
  border-radius: 5px;
  &:hover {
    box-shadow: 1px 4px 10px 3px rgba(28, 98, 103, 0.3);
    transform: scale(1.02);
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    display: inline;
    font-style: italic;
    font-size: 1rem;
    background: ${colors.lightblue};

    color: ${colors.gray};
    border-radius: 5px;
    padding: 4px;
    margin-right: 1rem;
  }
`

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
      <PostList>
        {data.allMdx.edges.map(({ node: post }) => (
          <PostLink key={post.frontmatter.slug}>
            <InternalLink to={post.frontmatter.slug}>
              {post.frontmatter.title}
            </InternalLink>
            <ul>
              {post.frontmatter.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </PostLink>
        ))}
      </PostList>
    </>
  )
}
