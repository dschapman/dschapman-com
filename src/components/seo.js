import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

const SEO = ({ title }) => (
  <Helmet title={title}>
    <link rel="stylesheet" href="https://use.typekit.net/osf8fyt.css"></link>
  </Helmet>
)

export default SEO
