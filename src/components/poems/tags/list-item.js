/** @jsx jsx */
import { Link } from 'gatsby'
import { Styled, jsx } from 'theme-ui'

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
    <Styled.li
      sx={{
        variant: 'styles.tagListItem',
      }}>
      <span>
        <Styled.a
          as={Link}
          to={'/poetry/tag/' + slug}
          sx={{
            variant: 'styles.tagLink',
          }}>
          {tag}
        </Styled.a>{' '}
        ({tagCount})
      </span>
    </Styled.li>
  )
}
