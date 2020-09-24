/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'

import TagListItem from './list-item'

export default ({ tags }) => {
  let newTags = tags.filter((tag) => tag.totalCount > 0) //filter out any tags with only one item
  return (
    <ul>
      {newTags.map((tag) => (
        <TagListItem
          key={tag.fieldValue}
          tag={tag.fieldValue}
          tagCount={tag.totalCount}
        />
      ))}
    </ul>
  )
}
