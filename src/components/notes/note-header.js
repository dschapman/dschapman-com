/** @jsx jsx */
import { jsx } from 'theme-ui'
import SEO from '../seo'
import Logo from '../layout/logo'
import { Header } from '../layout/header'
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
    <Header>
      <Logo />
      <HeaderLinks notes={true} />
      <SEO
        title={title}
        seoTitleAddition1={seoTitleAddition1}
        seoTitleAddition2={seoTitleAddition2}
        description={description}
        type={type}
        location={location}></SEO>
    </Header>
  )
}
