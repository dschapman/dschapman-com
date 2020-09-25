import React from 'react'
import { InternalLink } from '../layout/links'
import LinktipPreview from '../layout/linktip-preview'
import styled from '@emotion/styled'
import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import components from '../layout/mdx-components'

export const PostLink = styled.li`
  padding: 0.25rem;
  max-width: 400px;
  margin: 4px 0;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.01);
  transition: all 200ms ease-in-out;
  border-radius: 5px;
  &:hover {
    box-shadow: 1px 4px 10px 3px rgba(28, 98, 103, 0.3);
    transform: scale(1.02);
  }
`

export default ({ slug, title, body }) => (
  <PostLink>
    <InternalLink to={slug}>{title}</InternalLink>
  </PostLink>
)
