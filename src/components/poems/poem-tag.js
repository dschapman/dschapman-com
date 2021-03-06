import React from 'react'
import { InternalLink, InternalNotesLink } from '../layout/links'
import { graphql, Link } from 'gatsby'
import Layout from '../layout/layout'
import PostList from '../posts/post-list'
import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import components from '../layout/mdx-components'
import LinktipPreview from '../layout/linktip-preview'

const PoemTag = ({ data, pageContext, location }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.poems
  let note = data.notes
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
      <Layout
        title={'Poems tagged with ' + tag}
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
          <InternalNotesLink as={Link} to={`/notes/${note.slug}`}>
            my notes on {tag}
          </InternalNotesLink>
        </LinktipPreview>
        <br />
        <InternalLink as={Link} to="/poetry/tags">
          See all tags &rarr;
        </InternalLink>
      </Layout>
    )
  } else {
    return (
      <Layout
        title={'Poems tagged with ' + tag}
        titleTagName="h1"
        type="📚"
        location={location}>
        <PostList posts={edges} />
        <br />
        <InternalLink as={Link} to="/poetry/tags">
          See all tags &rarr;
        </InternalLink>
      </Layout>
    )
  }
}

export default PoemTag

export const pageQuery = graphql`
  query PoemTag($tag: String) {
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
  }
`
