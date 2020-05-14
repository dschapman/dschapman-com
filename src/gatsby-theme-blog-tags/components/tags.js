import React from 'react'

import Layout from '../../components/layout/layout'
import TagList from '../../components/tags/list'

export default ({ data, location }) => (
  <Layout
    title="Articles by Tags"
    titleTagName="h1"
    type="📚"
    location={location}>
    <TagList tags={data.allBlogPost.group} />
  </Layout>
)
