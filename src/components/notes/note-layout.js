/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { Link } from 'gatsby'
import Header from './note-header'
import MyCustomBreadcrumb from './breadcrumb'
import { useBreadcrumb } from 'gatsby-plugin-breadcrumb'
import { Global } from '@emotion/core'
import Footer from './note-footer'
import { Root, Main } from '../layout/layout'

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
    <Root>
      <Header
        title={title}
        seoTitleAddition1={seoTitleAddition1}
        seoTitleAddition2={seoTitleAddition2}
        description={description}
        type="Note 📝"
        location={location}
      />
      <Main>
        <div
          sx={{
            fontSize: '3',
          }}>
          <MyCustomBreadcrumb crumbs={crumbs} />
        </div>
        <h1>{title}</h1>
        {children}
      </Main>
      <Footer />
    </Root>
  )
}
