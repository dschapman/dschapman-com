/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
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
        <Link
          to="/"
          sx={{ variant: 'styles.navlink', p: 2, paddingRight: [2, 3, 3] }}>
          {siteMetadata.title}
        </Link>
        <Link
          to="/articles"
          sx={{
            variant: 'styles.navlink',
            p: 2,
            fontSize: ['11px', 3, 4],
            paddingLeft: [0.5, 2, 2],
          }}>
          Articles
        </Link>
        <Link
          to="/poetry"
          sx={{
            variant: 'styles.navlink',
            p: 2,
            fontSize: ['11px', 3, 4],
            paddingLeft: [0.5, 2, 2],
          }}>
          Poetry
        </Link>
        <Link
          to="/notes"
          sx={{
            variant: 'styles.navlink',
            color: 'gray',
            p: 2,
            paddingLeft: [0.5, 2, 2],
            marginLeft: [1, 'auto', 'auto'],
            fontSize: ['11px', 3, 4],
          }}>
          Notes
        </Link>
      </nav>
    )
  }
}
