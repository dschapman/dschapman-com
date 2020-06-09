/** @jsx jsx */
import { Link } from 'gatsby'
import { Styled, jsx } from 'theme-ui'
import LinktipPreview from '../layout/linktip-preview'
import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import components from '../layout/mdx-components'

export default ({ slug, title, body }) => (
  <Styled.li
    sx={{
      variant: 'styles.postlistitem',
    }}>
    <LinktipPreview
      tiptext={
        <MDXProvider components={components}>
          <Styled.h1>{title}</Styled.h1>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      }
      placement="right">
      <Styled.a
        as={Link}
        to={slug}
        sx={{
          variant: 'styles.postlink',
        }}>
        {title}
      </Styled.a>
    </LinktipPreview>
  </Styled.li>
)
