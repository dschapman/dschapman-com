import React from 'react'
import { InternalLink, InternalNotesLink } from '../layout/links'
import { graphql, Link } from 'gatsby'
import Layout from '../layout/layout'
import PostList from '../posts/post-list'
import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import components from '../layout/mdx-components'
import LinktipPreview from '../layout/linktip-preview'

const Tag = ({ data, pageContext, location }) => {
  const { tag } = pageContext
  const poem = data.poems
  const article = data.articles
  let note = data.notes

  function PoemBlock() {
    if (poem != null) {
      if (poem.totalCount > 0) {
        return (
          <>
            <h2>Poems</h2>
            <PostList posts={poem.edges} />
          </>
        )
      } else {
        return <></>
      }
    } else {
      return <></>
    }
  }
  function ArticleBlock() {
    if (article != null) {
      if (article.totalCount > 0) {
        return (
          <>
            <h2>Articles</h2>
            <PostList posts={article.edges} />
          </>
        )
      } else {
        return <></>
      }
    } else {
      return <></>
    }
  }
  function NoteBlock() {
    if (note != null) {
      let references = []
      let referenceBlock
      if (note.inboundReferenceNotes != null) {
        references = note.inboundReferenceNotes.map((ref) => (
          <li key={ref.id}>
            <InternalLink as={Link} to={`/notes/${ref.slug}`}>
              {ref.title}
            </InternalLink>
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
        <LinktipPreview
          placement="right"
          tiptext={
            <MDXProvider components={components}>
              <h1>{note.title}</h1>
              <MDXRenderer>{note.childMdx.body}</MDXRenderer>
              {referenceBlock}
            </MDXProvider>
          }>
          <InternalNotesLink as={Link} to={`/notes/${note.slug}`}>
            my notes on {tag}
          </InternalNotesLink>
        </LinktipPreview>
      )
    } else {
      return <></>
    }
  }
  return (
    <Layout
      title={'Content tagged with ' + tag}
      titleTagName="h1"
      type="📚"
      location={location}>
      <ArticleBlock />
      <PoemBlock />
      <br />
      <NoteBlock />
      <br />
      <InternalLink as={Link} to="/tags">
        See all tags &rarr;
      </InternalLink>
    </Layout>
  )
}

export default Tag

export const pageQuery = graphql`
  query Tag($tag: String) {
    poems: allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { tags: { in: [$tag] } }
        fileAbsolutePath: { regex: "/content/poems/" }
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
  }
`
