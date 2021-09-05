/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Tooltip from '../layout/tooltip'
import Layout from '../layout/layout'
import { graphql } from 'gatsby'
import SimilarContent from '../similar-content'
import colors from '../../lib/colors'

const WordCount = styled.div`
  position: absolute;
  bottom: 0rem;
`

const Post = ({ data, pageContext, location }) => {
  const wordCount = data.mdx.wordCount.words
  let emoji
  if (wordCount < 500) {
    emoji = '📄'
  } else if (wordCount < 1000) {
    emoji = '📄📄'
  } else if (wordCount < 1500) {
    emoji = '📄📄📄'
  } else if (wordCount < 2000) {
    emoji = '📄📄📄📄'
  } else if (wordCount < 2500) {
    emoji = '📄📄📄📄📄'
  } else {
    emoji = '📄📄📄📄📄📄'
  }

  return (
    <Layout
      seoTitle={data.mdx.frontmatter.title}
      description={data.mdx.frontmatter.excerpt}
      type="Article 📄"
      location={location}
      className="post">
      <h1
        css={css`
          position: relative;
          padding-bottom: 2rem;
        `}>
        {data.mdx.frontmatter.title}
        <WordCount>{emoji}</WordCount>
      </h1>
      <p
        css={css`
          margin-top: -2rem;
          margin-left: 0rem;
          font-style: italic;
          font-size: 1.25rem;
          color: ${colors.gray};
        `}>
        {' '}
        First published on{' '}
        <time dateTime={`${data.mdx.frontmatter.date}`}>
          {new Date(data.mdx.frontmatter.date).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        .
      </p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <SimilarContent
        tags={data.mdx.frontmatter.tags}
        title={data.mdx.frontmatter.title}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        excerpt
        tags
        date
      }
      timeToRead
      wordCount {
        words
      }
    }
  }
`
export default Post
