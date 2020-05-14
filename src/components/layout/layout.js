/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { MDXProvider } from '@mdx-js/react'
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
      <h1 sx={{ fontFamily: 'heading', fontWeight: 'heading' }}>{title}</h1>
      <MDXProvider>{children}</MDXProvider>
    </div>
  </Styled.root>
)
