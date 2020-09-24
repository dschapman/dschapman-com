/** @jsx jsx */
import { InternalLink } from '../layout/links'
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
    <li>
      <span>
        <InternalLink to={'/articles/tag/' + slug}>{tag}</InternalLink> (
        {tagCount})
      </span>
    </li>
  )
}
