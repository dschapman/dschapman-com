import React from 'react'
import Layout from '../components/layout/layout'
import Search from '../components/search'

const SearchPage = ({ location }) => (
  <Layout
    title="Search"
    description="Find the content on my site"
    location={location}>
    <Search />
  </Layout>
)

export default SearchPage
