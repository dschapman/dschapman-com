import React from 'react'

import Layout from '../../components/posts-layout'
import PostList from '../../components/post-list'

export default ({ data, location }) => (
  <Layout
    title="All Articles"
    descriptions="All the articles that are on my website, sorted chronologically."
    type="📚"
    titleTagName="h1"
    location={location}>
    <PostList posts={data.allBlogPost.edges} />
  </Layout>
)
