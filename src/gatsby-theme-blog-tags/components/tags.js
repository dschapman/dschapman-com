import React from 'react'
import SEO from '../../components/seo'

import Layout from '../../components/layout'
import TagList from '../../components/tags/list'

export default ({ data }) => (
  <Layout title="Articles by Tags" titleTagName="h1" type="📚">
    <TagList tags={data.allBlogPost.group} />
  </Layout>
)
