import React from 'react'

import Layout from '../layout/layout'
import TagList from './tags/list'

const PoemTags = ({ pageContext, location }) => {
  const { tags } = pageContext
  return (
    <Layout
      title="Poem by Tags"
      titleTagName="h1"
      type="📚"
      location={location}>
      <TagList tags={tags} />
    </Layout>
  )
}

export default PoemTags
