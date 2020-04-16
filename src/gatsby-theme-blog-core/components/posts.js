import React from 'react'
import SEO from '../../components/seo'

import Layout from '../../components/posts-layout'
import PostList from '../../components/post-list'

export default ({ data }) => (
  <Layout title="All Articles" titleTagName="h1">
    <SEO title="All Articles" />
    <PostList posts={data.allBlogPost.edges} />
  </Layout>
)
