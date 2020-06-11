import React from 'react'

import Layout from '../layout/layout'
import TagList from '../tags/list'

const ArticleTags = ({ pageContext, location }) => {
  const { tags } = pageContext
  return (
    <Layout
      title="Articles by Tags"
      titleTagName="h1"
      type="📚"
      location={location}>
      <TagList tags={tags} />
    </Layout>
  )
}

export default ArticleTags
