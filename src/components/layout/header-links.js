/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link, useStaticQuery, graphql } from 'gatsby'

export default ({ title }) => {
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

  return (
    <nav>
      <Link to="/" sx={{ variant: 'styles.navlink', p: 2, paddingRight: 3 }}>
        {siteMetadata.title}
      </Link>
      <Link to="/articles" sx={{ variant: 'styles.navlink', p: 2 }}>
        Articles
      </Link>
      <Link to="/poetry" sx={{ variant: 'styles.navlink', p: 2 }}>
        Poetry
      </Link>
    </nav>
  )
}
