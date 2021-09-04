import React from 'react'
import { PostListStyled } from '../posts/post-list'
import TagListItem from './list-item'

export default ({ tags, type }) => {
  let newTags = tags.filter((tag) => tag.totalCount > 1) //filter out any tags with only one item
  return (
    <PostListStyled>
      {newTags.map((tag) => (
        <TagListItem
          key={tag.fieldValue}
          tag={tag.fieldValue}
          tagCount={tag.totalCount}
          type={type}
        />
      ))}
    </PostListStyled>
  )
}
