/** @jsx jsx */
import { jsx } from 'theme-ui'
import SEO from './seo'
import Logo from './logo'
import HeaderLinks from './header-links'
import { useStaticQuery, graphql } from 'gatsby'

export default ({ title, description }) => {
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
    <header
      sx={{
        display: 'flex',
        alignItems: 'center',
        variant: 'styles.header',
        pt: [4, 5, 6],
        px: [3, 4, 5],
      }}>
      <Logo />
      <HeaderLinks title={title} />
      <SEO title={title} description={description}></SEO>
    </header>
  )
}
