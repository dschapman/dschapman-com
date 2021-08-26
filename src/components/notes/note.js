/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../layout/layout'
import { graphql } from 'gatsby'
import LinktipPreview from '../layout/linktip-preview'
import { MDXProvider } from '@mdx-js/react'
import regularComponents from '../layout/mdx-components'
import { InternalLink, InternalNotesLink } from '../layout/links'
import NoteNav from './note-nav'

export default ({ data, pageContext, location }) => {
  //notes that reference this note
  let references = []
  let referenceBlock
  let nodes = data.allMdx.nodes
  let relatedPoemsBlock
  let relatedArticlesBlock

  let relatedArticles = []
  let relatedPoems = []
  const popups = {}
  nodes.map((post) => {
    if (
      data.mdx.frontmatter.tags != null &&
      post.frontmatter.tags != null &&
      post.frontmatter.tags.some((tag) =>
        data.mdx.frontmatter.tags.includes(tag)
      ) &&
      post.frontmatter.slug.includes('/articles/')
    ) {
      relatedArticles.push(
        <li key={post.id}>
          <LinktipPreview
            tiptext={
              <MDXProvider components={regularComponents}>
                <h1>{post.frontmatter.title}</h1>
                <MDXRenderer>{post.body}</MDXRenderer>
              </MDXProvider>
            }
            placement="right">
            <InternalLink key={post.id} to={post.frontmatter.slug}>
              {post.frontmatter.title}
            </InternalLink>
          </LinktipPreview>
        </li>
      )
    } else if (
      data.mdx.frontmatter.tags != null &&
      post.frontmatter.tags != null &&
      post.frontmatter.tags.some((tag) =>
        data.mdx.frontmatter.tags.includes(tag)
      ) &&
      post.frontmatter.slug.includes('/poetry/')
    ) {
      relatedPoems.push(
        <li key={post.id}>
          <LinktipPreview
            tiptext={
              <MDXProvider components={regularComponents}>
                <h1>{post.frontmatter.title}</h1>
                <MDXRenderer>{post.body}</MDXRenderer>
              </MDXProvider>
            }
            placement="right">
            <InternalLink key={post.id} to={post.frontmatter.slug}>
              {post.frontmatter.title}
            </InternalLink>
          </LinktipPreview>
        </li>
      )
    }

    if (post) {
      popups[`${post.frontmatter.slug}`] = {
        title: post.frontmatter.title,
        body: post.body,
      }
    }
  })

  if (relatedArticles.length > 0) {
    relatedArticlesBlock = (
      <>
        <h2>Related Articles</h2>
        <ul>{relatedArticles}</ul>
      </>
    )
  }
  if (relatedPoems.length > 0) {
    relatedPoemsBlock = (
      <>
        <h2>Related Poems</h2>
        <ul>{relatedPoems}</ul>
      </>
    )
  }
  if (data.mdx.inboundReferences != null) {
    references = data.mdx.inboundReferences.map((ref) =>
      ref.frontmatter.published ? (
        <li key={ref.frontmatter.id}>
          <LinktipPreview
            tiptext={
              <MDXProvider components={regularComponents}>
                <h1>{ref.frontmatter.title}</h1>
                <MDXRenderer>{ref.body}</MDXRenderer>
              </MDXProvider>
            }
            placement="right">
            <InternalNotesLink to={`/notes/${ref.frontmatter.id}`}>
              {ref.frontmatter.title}
            </InternalNotesLink>
          </LinktipPreview>
        </li>
      ) : null
    )
  }
  //related note block
  if (references.length > 0 && references[0] != null) {
    referenceBlock = (
      <>
        <h2>Related Notes</h2>
        <ul>{references}</ul>
      </>
    )
  }

  return (
    <Layout
      title={data.mdx.frontmatter.title}
      description={data.mdx.frontmatter.excerpt}
      type="Note 📝"
      location={location}>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      {referenceBlock}
      {relatedArticlesBlock}
      {relatedPoemsBlock}
    </Layout>
  )
}

export const pageQuery = graphql`
  query NoteQuery($id: String) {
    mdx(id: { eq: $id }) {
      inboundReferences {
        ... on Mdx {
          frontmatter {
            id
            title
            published
          }
          body
        }
      }
      body
      excerpt
      frontmatter {
        title
        id
        tags
      }
    }
    allMdx(filter: { fileAbsolutePath: { regex: "/content/" } }) {
      nodes {
        frontmatter {
          tags
          slug
          title
        }
        id
        body
      }
    }
  }
`
