/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'

import TagListItem from './list-item'

export default ({ tags }) => {
  console.log(tags)
  let newTags = tags.filter((tag) => tag.totalCount > 1) //filter out any tags with only one item
  return (
    <Styled.ul
      sx={{
        variant: 'styles.tagList',
      }}>
      {newTags.map((tag) => (
        <TagListItem key={tag.fieldValue} tag={tag.fieldValue} />
      ))}
    </Styled.ul>
  )
}
