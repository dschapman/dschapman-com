/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'
import { InternalLink } from '../layout/links'
import { bpMaxLG, bpMaxSM } from '../../lib/breakpoints'
import colors from '../../lib/colors'
import { Link } from 'gatsby'

export const PostList = styled.ul`
  list-style-type: none;
  padding: 4px 0px;
  margin: 0;
  ${bpMaxLG} {
    width: 100%;
  }
`

export const PostLink = styled.li`
  padding: 0.5rem 0.5rem 0.5rem 0;
  margin: 0 0rem 0.5rem 0rem;
  display: block;
  width: fit-content;
  height: fit-content;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.01);
  transition: all 200ms ease-in-out;
  border-radius: 0 5px 5px 0;

  &:hover {
    box-shadow: 1px 4px 10px 3px rgba(28, 98, 103, 0.3);
    transform: scale(1.02);
    border-left: 4px solid ${colors.blue};
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    display: inline;
    word-break: keep-all;
    margin: 0;
    padding: 0;
  }
`

const TagLink = styled(Link)`
  font-style: italic;
  font-size: 1rem;
  text-decoration: none;
  color: ${colors.gray};
  border-radius: 5px;
  padding: 4px 0px;
  margin-right: 1rem;
  &:hover {
    color: ${colors.red};
  }
`

export const Description = styled.div`
  font-size: 1.4rem;
  padding: 0.5rem 0;
  color: ${colors.gray};
`

export default ({ posts, type }) => {
  let color
  switch (type) {
    case 'article':
      color = colors.blue
      break
    case 'poem':
      color = colors.red
      break
    default:
      color = colors.blue
      break
  }

  return (
    <PostList>
      {posts.map(({ node: post }) => (
        <PostLink
          key={post.frontmatter.slug}
          css={css`
            &:hover {
              border-color: ${color};
            }
          `}>
          <InternalLink to={post.frontmatter.slug}>
            {post.frontmatter.title}
          </InternalLink>
          <Description>{post.frontmatter.excerpt}</Description>
          <ul>
            {post.frontmatter.tags.map((tag) => (
              <li key={tag}>
                <TagLink to={`/tag/${tag}`}>{tag}</TagLink>
              </li>
            ))}
          </ul>
        </PostLink>
      ))}
    </PostList>
  )
}
