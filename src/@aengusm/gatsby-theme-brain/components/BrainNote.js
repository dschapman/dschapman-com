/** @jsx jsx */
import React from 'react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import Layout from '../../../components/notes/note-layout'
import { Styled, jsx, Theme } from 'theme-ui'
import components from '../../../components/notes/note-mdx-components.js'
import { MDXProvider } from '@mdx-js/react'
import { Link, Router } from 'gatsby'
import Tooltip from '../../../components/tooltip'

const BrainNote = ({ note, nodes, location }) => {
  let references = []
  let referenceBlock
  let relatedPoemsBlock
  let relatedArticlesBlock

  let relatedArticles = []
  let relatedPoems = []
  nodes.map((post) => {
    if (
      post.frontmatter.tags.indexOf(note.title.toLowerCase()) > -1 &&
      post.frontmatter.slug.includes('/articles/')
    ) {
      relatedArticles.push(
        <Styled.li key={post.id}>
          <Tooltip tiptext={`Link to my article "${post.frontmatter.title}"`}>
            <Styled.a as={Link} key={post.id} to={post.frontmatter.slug}>
              {post.frontmatter.title}
            </Styled.a>
          </Tooltip>
        </Styled.li>
      )
    }
  })

  nodes.map((post) => {
    if (
      post.frontmatter.tags.indexOf(note.title.toLowerCase()) > -1 &&
      post.frontmatter.slug.includes('/poetry/')
    ) {
      relatedPoems.push(
        <Styled.li key={post.id}>
          <Tooltip tiptext={`Link to my poem "${post.frontmatter.title}"`}>
            <Styled.a as={Link} key={post.id} to={post.frontmatter.slug}>
              {post.frontmatter.title}
            </Styled.a>
          </Tooltip>
        </Styled.li>
      )
    }
  })
  if (note.inboundReferencePreviews != null) {
    console.log(note.inboundReferencePreviews)
    references = note.inboundReferencePreviews.map((ref) => (
      <Styled.li key={ref.source}>
        <Tooltip
          tiptext={
            <MDXProvider components={components}>
              {ref.previewMarkdown}
            </MDXProvider>
          }>
          <Styled.a
            as={Link}
            to={`/notes/${ref.source}`}
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
            {ref.source}
          </Styled.a>
        </Tooltip>
      </Styled.li>
    ))
  }

  if (references.length > 0) {
    referenceBlock = (
      <>
        <Styled.h2>Linked References</Styled.h2>
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

  return (
    <MDXProvider components={components}>
      <Layout
        title={note.title}
        seoTitleAddition1="Digital Notes"
        seoTitleAddition2="D.S. Chapman"
        description={note.childMdx.excerpt}
        location={location}
        crumbLabel={note.title}>
        <MDXRenderer>{note.childMdx.body}</MDXRenderer>
        {referenceBlock}
        {relatedArticlesBlock}
        {relatedPoemsBlock}
      </Layout>
    </MDXProvider>
  )
}

export default BrainNote
