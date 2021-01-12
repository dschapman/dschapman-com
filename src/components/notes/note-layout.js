import React from 'react'
import '../global.css'
import Header from './note-header'
import MyCustomBreadcrumb from './breadcrumb'
import { useBreadcrumb } from 'gatsby-plugin-breadcrumb'

import Footer from '../layout/footer'
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
        <h1>Notes on {title}</h1>
        {children}
      </Main>
      <Footer />
    </Root>
  )
}
