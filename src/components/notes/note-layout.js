import React from 'react'
import '../global.css'
import Header from './note-header'
import MyCustomBreadcrumb from './breadcrumb'
import { useBreadcrumb } from 'gatsby-plugin-breadcrumb'
import styled from '@emotion/styled'
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
        <div>
          <MyCustomBreadcrumb crumbs={crumbs} />
        </div>
        <h1>{title}</h1>
        {children}
      </Main>
      <Footer />
    </Root>
  )
}
