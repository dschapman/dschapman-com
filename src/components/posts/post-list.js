/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'

import PostLink from './post-link'

export default ({ posts }) => (
  <Styled.ul
    sx={{
      variant: 'styles.postlist',
    }}>
    {posts.map(({ node: post }) => (
      <PostLink
        key={post.frontmatter.slug}
        title={post.frontmatter.title}
        body={post.body}
      />
    ))}
  </Styled.ul>
)
