/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import SimilarContent from '../similar-content.js'
import Layout from '../layout/layout'
import { graphql } from 'gatsby'

const Post = ({ data, pageContext, location }) => {
  return (
    <Layout
      seoTitle={data.mdx.frontmatter.title}
      description={data.mdx.frontmatter.excerpt}
      type="Blog 📅"
      location={location}
      className="blog">
      <h1
        css={css`
          position: relative;
          padding-bottom: 2rem;
        `}>
        {data.mdx.frontmatter.title}
      </h1>
      <h4>
        <time dateTime={`${data.mdx.frontmatter.date}`}>
          {new Date(data.mdx.frontmatter.date).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
      </h4>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <SimilarContent
        tags={data.mdx.frontmatter.tags}
        title={data.mdx.frontmatter.title}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        excerpt
        tags
        date
      }
    }
  }
`
export default Post
