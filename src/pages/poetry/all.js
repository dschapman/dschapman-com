/** @jsx jsx */
import React from 'react'
import Layout from '../../components/layout/layout'
import Search from '../../components/search'
import { graphql } from 'gatsby'

import { Styled, jsx } from 'theme-ui'

const PoemIndex = ({ data, location }) => {
  return (
    <Layout
      title="All Poems"
      excerpt="All the poems posted on my website."
      type="📚"
      location={location}>
      <Search data={data} />
    </Layout>
  )
}
export const pageQuery = graphql`
  query poemIndex {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/poems/" } }
      sort: { fields: frontmatter___title, order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            tags
          }
          body
        }
      }
    }
  }
`
export default PoemIndex
