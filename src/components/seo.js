import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
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
          seoTitleAddition1
          seoTitleAddition2
          description
          twitter
          siteUrl
        }
      }
    }
  `)
  const siteUrl = siteMetadata.siteUrl
  const pageTitle = title || siteMetadata.title
  const seoTitle = `${title || siteMetadata.seoTitleAddition1} | ${
    seoTitleAddition1 || siteMetadata.title
  } | ${seoTitleAddition2 || siteMetadata.seoTitleAddition2}`
  const seoDescription = description || siteMetadata.description
  const author = 'D.S. Chapman'

  const url = `${siteUrl}${location.pathname}`
  const ogImage = `https://quizzical-liskov-0bc7e1.netlify.app/opengraph?title=${pageTitle}&author=${author}&type=${type}&v=0.2.0`
  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="image" congent={ogImage} />
      <meta name="url" content={url} />

      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ds_chapman" />
      <meta name="twitter:creator" content={siteMetadata.twitter} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={ogImage} />

      <link rel="stylesheet" href="https://use.typekit.net/osf8fyt.css"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Mono&display=swap"
        rel="stylesheet"></link>
    </Helmet>
  )
}
