import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

export default ({
  title,
  description,
  timeToRead,
  seoTitleAddition1,
  seoTitleAddition2,
}) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          seoTitleAddition1
          seoTitleAddition2
          description
          twitter
        }
      }
    }
  `)
  const pageTitle = title || siteMetadata.title
  const seoTitle = `${title || siteMetadata.seoTitleAddition1} | ${
    seoTitleAddition1 || siteMetadata.title
  } | ${seoTitleAddition2 || siteMetadata.seoTitleAddition2}`
  const seoDescription = description || siteMetadata.description
  const author = 'D.S. Chapman'
  const ogImage = `https://quizzical-liskov-0bc7e1.netlify.app/opengraph?title=${pageTitle}&author=${author}&description=${seoDescription}&timeToRead=${timeToRead}&v=0.0.4`
  return (
    <Helmet title={seoTitle} description={seoDescription}>
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={ogImage} />
      <link rel="stylesheet" href="https://use.typekit.net/osf8fyt.css"></link>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={siteMetadata.twitter} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
