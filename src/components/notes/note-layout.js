/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { Link } from 'gatsby'
import Header from './note-header'
import MyCustomBreadcrumb from './breadcrumb'
import { useBreadcrumb } from 'gatsby-plugin-breadcrumb'
import { Global } from '@emotion/core'

export default ({
  children,
  title,
  description,
  seoTitleAddition1,
  seoTitleAddition2,
  location,
  crumbLabel,
}) => {
  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: crumbLabel,
  })

  return (
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
        seoTitleAddition1={seoTitleAddition1}
        seoTitleAddition2={seoTitleAddition2}
        description={description}
        type="Note 📝"
        location={location}
      />
      <div
        sx={{
          maxWidth: 'container',
          mx: 'auto',
        }}>
        <div
          sx={{
            fontSize: '3',
          }}>
          <MyCustomBreadcrumb crumbs={crumbs} />
        </div>
        <h1 sx={{ fontFamily: 'heading', fontWeight: 'heading', mt: 0 }}>
          {title}
        </h1>
        {children}
      </div>
    </Styled.root>
  )
}
