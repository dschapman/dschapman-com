import React from 'react'
import { InternalLink } from '../layout/links'
import { PostListStyled } from '../posts/post-list'

export default ({ tag, tagCount, type }) => {
  let slug = ''
  const tagSlug = tag
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
  switch (type) {
    case 'all':
      slug = '/tag/' + tagSlug
      break
    case 'poem':
      slug = '/poetry/tag/' + tagSlug
      break
    case 'article':
      slug = '/articles/tag/' + tagSlug
      break
    default:
      new Error('Unexpected type in Tag List Item')
  }
  return (
    <PostListStyled>
      <span>
        <InternalLink to={slug}>{tag}</InternalLink> ({tagCount})
      </span>
    </PostListStyled>
  )
}
