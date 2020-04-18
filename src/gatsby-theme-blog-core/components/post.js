import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import SEO from '../../components/seo'

import Layout from '../../components/post-layout'
import PostTitle from '../../components/post-title'
import { useStaticQuery, graphql } from 'gatsby'

export default ({ data, pageContext }) => {
  return (
    <Layout>
      <SEO
        title={data.blogPost.title}
        description={data.blogPost.excerpt}></SEO>
      <PostTitle>{data.blogPost.title}</PostTitle>
      <MDXRenderer>{data.blogPost.body}</MDXRenderer>
    </Layout>
  )
}
