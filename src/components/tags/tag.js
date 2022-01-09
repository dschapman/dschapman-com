import React from 'react'
import { InternalLink, InternalNotesLink } from '../layout/links'
import { graphql, Link } from 'gatsby'
import Layout from '../layout/layout'
import PostList from '../posts/post-list'
import BlogList from '../blog/blog-list'
import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import components from '../layout/mdx-components'
import LinktipPreview from '../layout/linktip-preview'

const Tag = ({ data, pageContext, location }) => {
  const { tag } = pageContext
  const poem = data.poems
  const article = data.articles
  let note = data.notes
  let blog = data.blogs

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
  function BlogBlock() {
    if (blog != null) {
      if (blog.totalCount > 0) {
        return (
          <>
            <h2>Blogs</h2>
            <BlogList posts={blog.edges} />
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
      if (note.totalCount > 0) {
        let relatedNotes = note.edges.map(({ node }) => {
          return (
            <li key={node.frontmatter.id}>
              <LinktipPreview
                placement="right"
                tiptext={
                  <MDXProvider components={components}>
                    <h1>{node.frontmatter.title}</h1>
                    <MDXRenderer>{node.body}</MDXRenderer>
                  </MDXProvider>
                }>
                <InternalNotesLink
                  as={Link}
                  to={`/notes/${node.frontmatter.id}`}>
                  {node.frontmatter.title}
                </InternalNotesLink>
              </LinktipPreview>
            </li>
          )
        })
        return (
          <>
            <h2>Notes</h2>
            <ul>{relatedNotes}</ul>
          </>
        )
      } else {
        return <></>
      }
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
      <BlogBlock />
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
        frontmatter: { tags: { in: [$tag] }, published: { eq: true } }
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
    articles: allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { tags: { in: [$tag] }, published: { eq: true } }
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
    blogs: allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { tags: { in: [$tag] }, published: { eq: true } }
        fileAbsolutePath: { regex: "/content/blog/" }
      }
    ) {
      totalCount
      edges {
        node {
          slug
          excerpt
          frontmatter {
            title
            date
            tags
          }
          body
        }
      }
    }
    notes: allMdx(
      filter: {
        frontmatter: { tags: { in: [$tag] }, published: { eq: true } }
        fileAbsolutePath: { regex: "/My-notes/" }
      }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            id
            excerpt
            tags
          }
          body
        }
      }
    }
  }
`
