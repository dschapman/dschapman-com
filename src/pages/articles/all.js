import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/posts/posts-layout'
import Search from '../../components/search'

const PostsIndex = ({ data, location }) => (
  <Layout
    title="All Articles"
    descriptions="All the articles that are on my website, sorted chronologically."
    type="📚"
    titleTagName="h1"
    location={location}>
    <Search data={data} />
  </Layout>
)
export const pageQuery = graphql`
  query PostsQuery {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/posts/" } }
      sort: { fields: frontmatter___title, order: ASC }
      limit: 1000
    ) {
      edges {
        node {
          id
          frontmatter {
            excerpt
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            tags
          }
          body
        }
      }
    }
  }
`
export default PostsIndex
