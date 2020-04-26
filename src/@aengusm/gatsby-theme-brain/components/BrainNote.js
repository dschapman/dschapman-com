/** @jsx jsx */
import React from 'react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import Layout from '../../../components/layout'
import { Styled, jsx } from 'theme-ui'
import components from '../../../components/note-mdx-components.js'
import { MDXProvider } from '@mdx-js/react'

const BrainNote = ({ note, nodes }) => {
  let references = []
  let referenceBlock
  let relatedPoemsBlock
  let relatedArticlesBlock

  let relatedArticles = []
  let relatedPoems = []
  nodes.map((post) => {
    if (
      post.frontmatter.tags.indexOf(note.title) > -1 &&
      post.frontmatter.slug.includes('/articles/')
    ) {
      relatedArticles.push(
        <Styled.li key={post.id}>
          <Styled.a key={post.id} href={post.frontmatter.slug}>
            {post.frontmatter.title}
          </Styled.a>
        </Styled.li>
      )
    }
  })

  nodes.map((post) => {
    if (
      post.frontmatter.tags.indexOf(note.title) > -1 &&
      post.frontmatter.slug.includes('/poetry/')
    ) {
      console.log(post.frontmatter.tags)
      relatedPoems.push(
        <Styled.li key={post.id}>
          <Styled.a key={post.id} href={post.frontmatter.slug}>
            {post.frontmatter.title}
          </Styled.a>
        </Styled.li>
      )
    }
  })
  console.log(relatedPoems)

  if (note.inboundReferences != null) {
    references = note.inboundReferences.map((ref) => (
      <Styled.li key={ref}>
        <Styled.a
          href={ref}
          sx={{
            bg: 'lightblue',
            textDecoration: 'none',
            '&:hover': {
              color: 'text',
              bg: 'white',
            },
          }}>
          {ref}
        </Styled.a>
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
      <Layout title={note.title}>
        <MDXRenderer>{note.childMdx.body}</MDXRenderer>
        {referenceBlock}
        {relatedArticlesBlock}
        {relatedPoemsBlock}
      </Layout>
    </MDXProvider>
  )
}

export default BrainNote
