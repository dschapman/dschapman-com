/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'

import PostLink from './post-link'

export default ({ posts }) => (
  <Styled.ul
    sx={{
      variant: 'styles.postlist',
    }}>
    {posts.map(({ node: post }) => (
      <PostLink key={post.slug} {...post} />
    ))}
  </Styled.ul>
)
