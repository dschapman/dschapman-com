/** @jsx jsx */
import React from 'react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import Layout from '../../../components/notes/note-layout'
import { Styled, jsx, Theme } from 'theme-ui'
import noteComponents from '../../../components/notes/note-mdx-components.js'
import regularComponents from '../../../components/layout/mdx-components'
import { MDXProvider } from '@mdx-js/react'
import { Link, Router } from 'gatsby'
import { LinktipPreview, Linktip } from '../../../components/layout/linktip'
import Tooltip from '../../../components/layout/tooltip'
import Footnote from '../../../components/layout/footnote'
import { Callout } from '../../../components/layout/TextStyles'

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
      post.frontmatter.tags.indexOf(note.title.toLowerCase()) > -1 &&
      post.frontmatter.slug.includes('/articles/')
    ) {
      relatedArticles.push(
        <Styled.li key={post.id}>
          <LinktipPreview
            tiptext={
              <MDXProvider components={regularComponents}>
                <Styled.h1>{post.frontmatter.title}</Styled.h1>
                <MDXRenderer>{post.body}</MDXRenderer>
              </MDXProvider>
            }
            placement="right">
            <Styled.a as={Link} key={post.id} to={post.frontmatter.slug}>
              {post.frontmatter.title}
            </Styled.a>
          </LinktipPreview>
        </Styled.li>
      )
    } else if (
      post.frontmatter.tags.indexOf(note.title.toLowerCase()) > -1 &&
      post.frontmatter.slug.includes('/poetry/')
    ) {
      relatedPoems.push(
        <Styled.li key={post.id}>
          <LinktipPreview
            tiptext={
              <MDXProvider components={regularComponents}>
                <Styled.h1>{post.frontmatter.title}</Styled.h1>
                <MDXRenderer>{post.body}</MDXRenderer>
              </MDXProvider>
            }
            placement="right">
            <Styled.a as={Link} key={post.id} to={post.frontmatter.slug}>
              {post.frontmatter.title}
            </Styled.a>
          </LinktipPreview>
        </Styled.li>
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
      <Styled.li key={ref.id}>
        <LinktipPreview
          tiptext={
            <MDXProvider components={regularComponents}>
              <Styled.h1>{ref.title}</Styled.h1>
              <MDXRenderer>{ref.childMdx.body}</MDXRenderer>
            </MDXProvider>
          }
          placement="right">
          <Styled.a
            as={Link}
            to={`/notes/${ref.slug}`}
            sx={{
              bg: 'lightblue',
              textDecoration: 'none',
              '&:hover,&:focus': {
                color: 'text',
                bg: 'white',
                textDecoration: 'underline',
                textDecorationColor: 'lightblue',
              },
            }}>
            {ref.title}
          </Styled.a>
        </LinktipPreview>
      </Styled.li>
    ))
  }

  if (references.length > 0) {
    referenceBlock = (
      <>
        <Styled.h2>Referenced in</Styled.h2>
        <Styled.ul>{references}</Styled.ul>
      </>
    )
  }
  if (relatedArticles.length > 0) {
    relatedArticlesBlock = (
      <>
        <Styled.h2>Related Articles</Styled.h2>
        <Styled.ul>{relatedArticles}</Styled.ul>
      </>
    )
  }
  if (relatedPoems.length > 0) {
    relatedPoemsBlock = (
      <>
        <Styled.h2>Related Poems</Styled.h2>
        <Styled.ul>{relatedPoems}</Styled.ul>
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
