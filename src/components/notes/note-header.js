/** @jsx jsx */
import { jsx } from 'theme-ui'
import SEO from '../seo'
import Logo from '../layout/logo'
import HeaderLinks from '../layout/header-links'
import { useStaticQuery, graphql } from 'gatsby'

export default ({
  title,
  description,
  seoTitleAddition1,
  seoTitleAddition2,
  type,
  location,
}) => {
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
        mb: '0',
      }}>
      <Logo />
      <HeaderLinks notes={true} />
      <SEO
        title={title}
        seoTitleAddition1={seoTitleAddition1}
        seoTitleAddition2={seoTitleAddition2}
        description={description}
        type={type}
        location={location}></SEO>
    </header>
  )
}
