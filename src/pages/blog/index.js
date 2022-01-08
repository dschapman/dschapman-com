import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout/layout'
import BlogList from '../../components/blog/blog-list'
import { InternalLink } from '../../components/layout/links'

const BlogIndex = ({ data, location }) => (
  <Layout
    title="Daniel's Corner Garden Blog 🌻"
    descriptions="A place to plant ideas in clear straight lines to see what grows."
    type="📅"
    titleTagName="h1"
    location={location}>
    <BlogList posts={data.allMdx.edges} type="article" />
  </Layout>
)
export const pageQuery = graphql`
  query BlogsQuery {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      sort: { fields: frontmatter___date, order: ASC }
      limit: 1000
    ) {
      edges {
        node {
          id
          slug
          frontmatter {
            excerpt
            title
            date
            tags
          }
          excerpt
        }
      }
    }
  }
`
export default BlogIndex
