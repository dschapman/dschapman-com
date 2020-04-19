import React from 'react'
import SEO from '../../components/seo'

import Layout from '../../components/posts-layout'
import PostList from '../../components/post-list'

export default ({ data }) => (
  <Layout
    title="All Articles"
    descriptions="All the articles that are on my website, sorted chronologically."
    titleTagName="h1">
    <PostList posts={data.allBlogPost.edges} />
  </Layout>
)
