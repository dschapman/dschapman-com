import React from 'react'
import styled from '@emotion/styled'

import PostLink from '../posts/post-link'

export const PoemList = styled.ul`
  list-style-type: none;
  padding: 4px;
  margin: 0;
`

export default ({ posts }) => (
  <PoemList>
    {posts.map(({ node: post }) => (
      <PostLink
        key={post.frontmatter.slug}
        slug={post.frontmatter.slug}
        title={post.frontmatter.title}
        body={post.body}
      />
    ))}
  </PoemList>
)
