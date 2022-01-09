import React from 'react'

import Layout from '../layout/layout'
import TagList from '../tags/list'

const BlogTags = ({ pageContext, location }) => {
  const { tags } = pageContext
  return (
    <Layout
      title="Blogs by Tags"
      titleTagName="h1"
      type="🌻"
      location={location}>
      <TagList tags={tags} type="blog" />
    </Layout>
  )
}

export default BlogTags
