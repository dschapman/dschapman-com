/** @jsx jsx */
import { InternalLink } from '../layout/links'
import { Styled, jsx } from 'theme-ui'
import LinktipPreview from '../layout/linktip-preview'
import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import components from '../layout/mdx-components'

export default ({ slug, title, body }) => (
  <li>
    <LinktipPreview
      tiptext={
        <MDXProvider components={components}>
          <Styled.h1>{title}</Styled.h1>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      }
      placement="right">
      <InternalLink to={slug}>{title}</InternalLink>
    </LinktipPreview>
  </li>
)
