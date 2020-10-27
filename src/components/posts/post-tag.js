/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { graphql } from 'gatsby'
import { InternalLink, InternalNotesLink } from '../layout/links'
import Layout from '../layout/layout'
import PostList from './post-list'
import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import components from '../layout/mdx-components'
import LinktipPreview from '../layout/linktip-preview'

const ArticleTag = ({ data, pageContext, location }) => {
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
        title={'Articles tagged with ' + tag}
        titleTagName="h1"
        type="📚"
        location={location}>
        <PostList posts={edges} />
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
        <InternalLink to="/articles/tags">See all tags &rarr;</InternalLink>
      </Layout>
    )
  } else {
    return (
      <Layout
        title={'Articles tagged with ' + tag}
        titleTagName="h1"
        type="📚"
        location={location}>
        <PostList posts={edges} />
        <br />
        <InternalLink to="/articles/tags">See all tags &rarr;</InternalLink>
      </Layout>
    )
  }
}

export default ArticleTag

export const pageQuery = graphql`
  query ArticleTag($tag: String) {
    articles: allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { tags: { in: [$tag] } }
        fileAbsolutePath: { regex: "/content/posts/" }
      }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            excerpt
            tags
          }
          body
        }
      }
    }
    notes: brainNote(slug: { eq: $tag }) {
      slug
      title
      childMdx {
        body
      }
      inboundReferenceNotes {
        id
        title
        slug
        childMdx {
          excerpt
          body
        }
      }
    }
  }
`
