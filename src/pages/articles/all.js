import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout/layout'
import PostList from '../../components/posts/post-list'
import { InternalLink } from '../../components/layout/links'

const PostsIndex = ({ data, location }) => (
  <Layout
    title="All Articles"
    descriptions="All the articles that are on my website."
    type="📚"
    titleTagName="h1"
    location={location}>
    <p>All the articles on my website sorted by title.</p>
    <PostList posts={data.allMdx.edges} type="article" />
    <p>
      Return to{' '}
      <InternalLink to="/articles">
        a curated selection of articles &rarr;
      </InternalLink>
    </p>
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
