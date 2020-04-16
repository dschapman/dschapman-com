import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import SEO from '../../components/seo'

import Layout from '../../components/post-layout'
import PostTitle from '../../components/post-title'

export default ({ data: { blogPost } }) => (
  <Layout>
    <SEO title={blogPost.title}></SEO>
    <PostTitle>{blogPost.title}</PostTitle>
    <MDXRenderer>{blogPost.body}</MDXRenderer>
  </Layout>
)
