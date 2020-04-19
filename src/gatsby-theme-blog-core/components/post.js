import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../../components/post-layout'

export default ({ data, pageContext }) => {
  return (
    <Layout title={data.blogPost.title} description={data.blogPost.excerpt}>
      <MDXRenderer>{data.blogPost.body}</MDXRenderer>
    </Layout>
  )
}
