/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/react'
import { graphql } from 'gatsby'
import { InternalLink, InternalNotesLink } from '../layout/links'
import Layout from '../layout/layout'
import BlogList from './blog-list'
import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import components from '../layout/mdx-components'
import LinktipPreview from '../layout/linktip-preview'

const BlogTag = ({ data, pageContext, location }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.articles
  let note = data.notes
  if (note != null) {
    let references = []
    let referenceBlock
    if (note.inboundReferenceNotes != null) {
      references = note.inboundReferenceNotes.map((ref) => (
        <li key={ref.id}>
          <InternalNotesLink to={`/notes/${ref.slug}`}>
            {ref.title}
          </InternalNotesLink>
        </li>
      ))
    }

    if (references.length > 0) {
      referenceBlock = (
        <>
          <h2>Referenced in</h2>
          <ul>{references}</ul>
        </>
      )
    }
    return (
      <Layout
        title={'Blogs tagged with ' + tag}
        titleTagName="h1"
        type="🌻"
        location={location}>
        <BlogList posts={edges} />
        <br />
        <LinktipPreview
          placement="right"
          tiptext={
            <MDXProvider components={components}>
              <h1>{note.title}</h1>
              <MDXRenderer>{note.childMdx.body}</MDXRenderer>
              {referenceBlock}
            </MDXProvider>
          }>
          <InternalNotesLink to={`/notes/${note.slug}`}>
            my notes on {tag}
          </InternalNotesLink>
        </LinktipPreview>
        <br />
        <InternalLink to="/blog/tags">See all tags &rarr;</InternalLink>
      </Layout>
    )
  } else {
    return (
      <Layout
        title={'Blogs tagged with ' + tag}
        titleTagName="h1"
        type="📚"
        location={location}>
        <BlogList posts={edges} />
        <br />
        <InternalLink to="/blog/tags">See all tags &rarr;</InternalLink>
      </Layout>
    )
  }
}

export default BlogTag

export const pageQuery = graphql`
  query BlogTag($tag: String) {
    articles: allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { tags: { in: [$tag] } }
        fileAbsolutePath: { regex: "/content/blog/" }
      }
    ) {
      totalCount
      edges {
        node {
          slug
          frontmatter {
            title
            date
            excerpt
            tags
          }
          body
        }
      }
    }
  }
`
