import React from 'react'
import { InternalLink } from '../layout/links'
import { PostList } from '../posts/post-list'

export default ({ tag, tagCount }) => {
  const slug = tag
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
  return (
    <PostList>
      <span>
        <InternalLink to={'/articles/tag/' + slug}>{tag}</InternalLink> (
        {tagCount})
      </span>
    </PostList>
  )
}
