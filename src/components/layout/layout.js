/** @jsx jsx */
import { Styled, jsx, colors } from 'theme-ui'
import { Global, css } from '@emotion/core'
import { MDXProvider } from '@mdx-js/react'
import components from './mdx-components'
import Header from './header'

export default ({
  children,
  title,
  description,
  seoTitle,
  seoTitleAddition1,
  seoTitleAddition2,
  type,
  location,
}) => (
  <Styled.root>
    <Global
      styles={(theme) => ({
        '*': {
          '::selection': {
            color: '#ffffff',
            backgroundColor: '#75B9BE',
          },
        },
      })}
    />
    <Header
      title={title}
      seoTitle={seoTitle}
      seoTitleAddition1={seoTitleAddition1}
      seoTitleAddition2={seoTitleAddition2}
      description={description}
      type={type}
      location={location}
    />
    <div
      sx={{
        maxWidth: 'container',
        px: [3, 4, 5],
      }}>
      <h1
        sx={{
          fontFamily: 'heading',
          fontWeight: 'heading',
        }}>
        {title}
      </h1>
      <MDXProvider components={components}>{children}</MDXProvider>
    </div>
  </Styled.root>
)
