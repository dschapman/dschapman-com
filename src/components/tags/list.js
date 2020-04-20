/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'

import TagListItem from './list-item'

export default ({ tags }) => {
  let newTags = tags.filter((tag) => tag.totalCount > 1) //filter out any tags with only one item
  console.log(newTags)
  return (
    <Styled.ul
      sx={{
        variant: 'styles.tagList',
      }}>
      {newTags.map((tag) => (
        <TagListItem key={tag.tag} {...tag} />
      ))}
    </Styled.ul>
  )
}
