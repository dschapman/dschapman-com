/** @jsx jsx */
import { jsx } from 'theme-ui'
import SEO from './seo'
import Logo from './logo'
import HeaderLinks from './header-links'
import { useStaticQuery, graphql } from 'gatsby'

export default ({
  title,
  description,
  seoTitle,
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

  if (seoTitle) {
    const title = seoTitle
  } else {
    const title = title
  }
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
