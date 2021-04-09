/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
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
      }
    }
  }
`
