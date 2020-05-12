import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../../components/post-layout'

export default ({ data, pageContext, location }) => {
  return (
    <Layout
      title={data.blogPost.title}
      description={data.blogPost.excerpt}
      type="Article 📄"
      location={location}>
      <MDXRenderer>{data.blogPost.body}</MDXRenderer>
    </Layout>
  )
}
