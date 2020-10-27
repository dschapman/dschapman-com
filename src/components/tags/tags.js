import React from 'react'

import Layout from '../layout/layout'
import TagList from './list'

const AllTags = ({ pageContext, location }) => {
  const { tags } = pageContext
  return (
    <Layout
      title="All Content by Tags"
      titleTagName="h1"
      type="📚"
      location={location}>
      <TagList tags={tags} type="all" />
    </Layout>
  )
}

export default AllTags
