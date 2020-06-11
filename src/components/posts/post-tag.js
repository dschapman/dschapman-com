/** @jsx jsx */
import React from 'react'
import { Styled, jsx } from 'theme-ui'
import { graphql, Link } from 'gatsby'
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
        <Styled.li key={ref.id}>
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
    return (
      <Layout
        title={'Articles on ' + tag}
        titleTagName="h1"
        type="📚"
        location={location}>
        <PostList posts={edges} />
        <br />
        <LinktipPreview
          placement="right"
          tiptext={
            <MDXProvider components={components}>
              <Styled.h1>{note.title}</Styled.h1>
              <MDXRenderer>{note.childMdx.body}</MDXRenderer>
              {referenceBlock}
            </MDXProvider>
          }>
          <Styled.a
            as={Link}
            to={`/notes/${note.slug}`}
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
            my notes on {tag}
          </Styled.a>
        </LinktipPreview>
      </Layout>
    )
  } else {
    return (
      <Layout
        title={'Articles on ' + tag}
        titleTagName="h1"
        type="📚"
        location={location}>
        <PostList posts={edges} />
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
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
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
