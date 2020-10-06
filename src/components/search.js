import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, connectHits } from 'react-instantsearch-dom'
import PostLink from '../components/posts/post-link'
import { InternalLink } from '../components/layout/links'
import styled from '@emotion/styled'

const searchClient = algoliasearch(
  'EBZNK4DVT4',
  '4f0d87f9f86068718ca34cfd2ce4137b'
)

const SearchContainer = styled.div``

const Hits = connectHits(({ hits }) => {
  return (
    <ul>
      {hits.map((hit) => (
        <li key={hit.objectID}>
          <InternalLink to={hit.url}>{hit.title}</InternalLink>
        </li>
      ))}
    </ul>
  )
})

function Search() {
  return (
    <SearchContainer>
      <InstantSearch
        searchClient={searchClient}
        indexName="netlify_214980c5-e23c-492e-8f7b-3117aff9437f_master_all"
        root={{ Root: SearchContainer }}>
        <SearchBox />
        <Hits />
      </InstantSearch>
    </SearchContainer>
  )
}

export default Search
