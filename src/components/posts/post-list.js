/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'

import PostLink from './post-link'

export default ({ posts }) => (
  <ul>
    {posts.map(({ node: post }) => (
      <PostLink
        key={post.frontmatter.slug}
        slug={post.frontmatter.slug}
        title={post.frontmatter.title}
        body={post.body}
      />
    ))}
  </ul>
)
