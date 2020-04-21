import React from 'react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import Layout from '../../../components/layout'
import { Styled, jsx } from 'theme-ui'

const BrainNote = ({ note }) => {
  let references = []
  let referenceBlock
  if (note.inboundReferences != null) {
    references = note.inboundReferences.map((ref) => (
      <Styled.li key={ref}>
        <Styled.a href={ref}>{ref}</Styled.a>
      </Styled.li>
    ))

    if (references.length > 0) {
      referenceBlock = (
        <>
          <Styled.h2>Linked References</Styled.h2>
          <Styled.ul>{references}</Styled.ul>
        </>
      )
    }
  }
  return (
    <Layout title={note.title}>
      <MDXRenderer>{note.childMdx.body}</MDXRenderer>
      {referenceBlock}
    </Layout>
  )
}

export default BrainNote
