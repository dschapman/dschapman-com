import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout/layout'
import NoteNav from '../../components/notes/note-nav'
const NotesIndex = ({ data, location }) => (
  <Layout
    title={data.mdx.frontmatter.title}
    descriptions="My public notes, digital scraps of paper, and ephemeral scratchings."
    type="Note 📝"
    titleTagName="h1"
    location={location}>
    <MDXRenderer>{data.mdx.body}</MDXRenderer>
  </Layout>
)
export const pageQuery = graphql`
  query RootNoteQuery {
    mdx(frontmatter: { id: { eq: "652e319b-7ae5-46cb-8afb-e42f8fc600ca" } }) {
      id
      body
      frontmatter {
        title
        desc
      }
    }
  }
`

export default NotesIndex
