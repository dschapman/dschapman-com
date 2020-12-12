import React from 'react'
import styled from '@emotion/styled'
import { InternalLink } from '../layout/links'
import { bpMaxLG, bpMaxSM } from '../../lib/breakpoints'
import colors from '../../lib/colors'
import { Link } from 'gatsby'

export const PostList = styled.ul`
  list-style-type: none;
  padding: 4px;
  margin: 0;
  ${bpMaxLG} {
    width: 100%;
  }
`

const PostLink = styled.li`
  padding: 0.5rem;
  margin: 4px 8px;
  display: block;
  width: fit-content;
  height: fit-content;
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
  }
`

const TagLink = styled(Link)`
  font-style: italic;
  font-size: 1rem;
  background: ${colors.lightblue};
  text-decoration: none;
  color: ${colors.gray};
  border-radius: 5px;
  padding: 4px;
  margin-right: 1rem;
  ${bpMaxSM} {
    font-size: 0.75rem;
  }
  &:hover {
    background: white;
  }
`

const Description = styled.div`
  font-size: 1rem;
`

export default ({ posts }) => (
  <PostList>
    {posts.map(({ node: post }) => (
      <PostLink key={post.frontmatter.slug}>
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
