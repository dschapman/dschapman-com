/** @jsx jsx */
import { Link } from 'gatsby'
import { Styled, jsx } from 'theme-ui'
import Linktip from '../layout/linktip'

export default ({ slug, title, excerpt }) => (
  <Styled.li
    sx={{
      variant: 'styles.postlistitem',
    }}>
    <Linktip tiptext={excerpt}>
      <Styled.a
        as={Link}
        to={slug}
        sx={{
          variant: 'styles.postlink',
        }}>
        {title}
      </Styled.a>
    </Linktip>
  </Styled.li>
)
