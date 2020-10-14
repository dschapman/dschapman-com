import React from 'react'
import styled from '@emotion/styled'

import PostLink from './post-link'

export const PostList = styled.ul`
  list-style-type: none;
  padding: 4px;
  margin: 0;
`

export default ({ posts }) => (
  <PostList>
    {posts.map(({ node: post }) => (
      <PostLink
        key={post.frontmatter.slug}
        slug={post.frontmatter.slug}
        title={post.frontmatter.title}
        body={post.body}
      />
    ))}
  </PostList>
)
