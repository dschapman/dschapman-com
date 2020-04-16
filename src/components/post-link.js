/** @jsx jsx */
import { Link } from 'gatsby'
import { Styled, jsx } from 'theme-ui'

export default ({ slug, title }) => (
  <Styled.li
    sx={{
      variant: 'styles.postlistitem',
    }}>
    <Styled.a
      as={Link}
      to={slug}
      sx={{
        variant: 'styles.postlink',
      }}>
      {title}
    </Styled.a>
  </Styled.li>
)
