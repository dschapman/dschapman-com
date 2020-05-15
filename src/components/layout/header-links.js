/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link, useStaticQuery, graphql } from 'gatsby'

export default ({ notes }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  if (notes) {
    return (
      <nav sx={{ display: 'flex', width: 'container' }}>
        <Link to="/" sx={{ variant: 'styles.navlink', p: 2, paddingRight: 3 }}>
          {siteMetadata.title}
        </Link>
      </nav>
    )
  } else {
    return (
      <nav sx={{ display: 'flex', width: 'container' }}>
        <Link to="/" sx={{ variant: 'styles.navlink', p: 2, paddingRight: 3 }}>
          {siteMetadata.title}
        </Link>
        <Link to="/articles" sx={{ variant: 'styles.navlink', p: 2 }}>
          Articles
        </Link>
        <Link to="/poetry" sx={{ variant: 'styles.navlink', p: 2 }}>
          Poetry
        </Link>
        <Link
          to="/notes"
          sx={{
            variant: 'styles.navlink',
            color: 'gray',
            p: 2,
            marginLeft: 'auto',
          }}>
          Notes
        </Link>
      </nav>
    )
  }
}
