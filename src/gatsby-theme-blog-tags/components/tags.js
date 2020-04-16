import React from 'react'
import SEO from '../../components/seo'

import Layout from '../../components/layout'
import TagList from '../../components/tags/list'

export default ({ data }) => (
  <Layout title="Tags" titleTagName="h1">
    <SEO title="Tags" />
    <TagList tags={data.allBlogPost.group} />
  </Layout>
)
