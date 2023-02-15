/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/react'
import { InternalLink } from '../layout/links'
import { bpMaxLG, bpMaxSM } from '../../lib/breakpoints'
import colors from '../../lib/colors'
import { Link } from 'gatsby'

export const BlogListStyled = styled.ul`
  list-style-type: none;
  padding: 4px 0px;
  margin: 0;
  ${bpMaxLG} {
    width: 100%;
  }
`

export const BlogLinkStyled = styled.li`
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
    word-break: break-word;
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
  padding: 0.5 0;
  color: ${colors.gray};
`

export const PubDate = styled.h3`
  font-size: 1.4rem;
  padding: 0;
  margin: 0.5rem 0;
  color: ${colors.text};
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
    <BlogListStyled>
      {posts.map(({ node: post }) => (
        <BlogLinkStyled key={post.slug}>
          <InternalLink
            to={`/blog/${post.frontmatter.date.substring(
              0,
              4
            )}/${post.frontmatter.date.substring(5, 7)}/${post.slug}`}>
            {post.frontmatter.title}
          </InternalLink>{' '}
          -{' '}
          <i>
            <small>{new Date(post.frontmatter.date).toDateString()}</small>
          </i>
          <ul>
            {post.frontmatter.tags.map((tag) => (
              <li key={tag}>
                <TagLink
                  to={`/tag/${tag
                    .toString()
                    .toLowerCase()
                    .replace(/\s+/g, '-') // Replace spaces with -
                    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
                    .replace(/\-\-+/g, '-') // Replace multiple - with single -
                    .replace(/^-+/, '') // Trim - from start of text
                    .replace(/-+$/, '')}`}>
                  {tag}
                </TagLink>
              </li>
            ))}
          </ul>
        </BlogLinkStyled>
      ))}
    </BlogListStyled>
  )
}
