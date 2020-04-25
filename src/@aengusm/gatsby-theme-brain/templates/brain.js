import React from 'react'
import { graphql } from 'gatsby'
import BrainNote from '../components/BrainNote'

export default (props) => {
  return (
    <BrainNote note={props.data.brainNote} nodes={props.data.allMdx.nodes} />
  )
}

export const query = graphql`
  query BrainNoteBySlugAndAllMdx($slug: String!) {
    brainNote(slug: { eq: $slug }) {
      slug
      title
      inboundReferences
      childMdx {
        body
      }
    }
    allMdx(filter: { fileAbsolutePath: { regex: "/content/", ne: "notes" } }) {
      nodes {
        frontmatter {
          tags
          slug
          title
        }
        id
      }
    }
  }
`
