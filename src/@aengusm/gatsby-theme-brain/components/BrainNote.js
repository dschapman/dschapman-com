/** @jsx jsx */
import React from 'react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import Layout from '../../../components/notes/note-layout'
import { jsx } from '@emotion/core'
import noteComponents from '../../../components/notes/note-mdx-components.js'
import regularComponents from '../../../components/layout/mdx-components'
import { MDXProvider } from '@mdx-js/react'
import { Link, Router } from 'gatsby'
import Linktip from '../../../components/layout/linktip'
import LinktipPreview from '../../../components/layout/linktip-preview'
import Tooltip from '../../../components/layout/tooltip'
import { Footnote, Marginnote } from '../../../components/layout/sidenote'
import { Figure } from '../../../components/layout/figure'
import { Callout } from '../../../components/layout/TextStyles'
import {
  InternalLink,
  ExternalLink,
  InternalNotesLink,
} from '../../../components/layout/links'

const BrainNote = ({ note, nodes, location }) => {
  let references = []
  let referenceBlock
  let relatedPoemsBlock
  let relatedArticlesBlock

  let relatedArticles = []
  let relatedPoems = []
  const popups = {}
  nodes.map((post) => {
    if (
      post.frontmatter.tags.indexOf(note.slug) > -1 &&
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
      post.frontmatter.tags.indexOf(note.slug) > -1 &&
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

  if (note.inboundReferenceNotes != null) {
    references = note.inboundReferenceNotes.map((ref) => (
      <li key={ref.id}>
        <LinktipPreview
          tiptext={
            <MDXProvider components={regularComponents}>
              <h1>{ref.title}</h1>
              <MDXRenderer>{ref.childMdx.body}</MDXRenderer>
            </MDXProvider>
          }
          placement="right">
          <InternalNotesLink to={`/notes/${ref.slug}`}>
            {ref.title}
          </InternalNotesLink>
        </LinktipPreview>
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

  if (note.outboundReferenceNotes) {
    note.outboundReferenceNotes
      .filter((reference) => !!reference.childMdx.excerpt)
      .forEach((ln, i) => {
        popups[`/notes/${ln.slug}`] = {
          title: ln.title,
          body: ln.childMdx.body,
        }
      })
  }
  const AnchorTag = (props) => <noteComponents.a {...props} popups={popups} />

  return (
    <Layout
      title={note.title}
      seoTitleAddition1="Digital Notes"
      seoTitleAddition2="D.S. Chapman"
      description={note.childMdx.excerpt}
      location={location}
      crumbLabel={note.title}>
      <MDXProvider
        components={{
          a: AnchorTag,
          Footnote: (props) => <Footnote {...props} />,
          Tooltip: (props) => <Tooltip {...props} />,
          Linktip: (props) => <Linktip {...props} />,
          Callout: (props) => <Callout {...props} />,
          Marginnote: (props) => <Marginnote {...props} />,
          Figure: (props) => <Figure {...props} />,
        }}>
        <MDXRenderer>{note.childMdx.body}</MDXRenderer>
      </MDXProvider>
      {referenceBlock}
      {relatedArticlesBlock}
      {relatedPoemsBlock}
    </Layout>
  )
}

export default BrainNote
