import React from 'react'
import { PostList } from '../posts/post-list'
import TagListItem from './list-item'

export default ({ tags, type }) => {
  let newTags = tags.filter((tag) => tag.totalCount > 0) //filter out any tags with only one item
  return (
    <PostList>
      {newTags.map((tag) => (
        <TagListItem
          key={tag.fieldValue}
          tag={tag.fieldValue}
          tagCount={tag.totalCount}
          type={type}
        />
      ))}
    </PostList>
  )
}
