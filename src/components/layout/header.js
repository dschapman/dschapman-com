import React from 'react'
import SEO from '../seo'
import Logo from './logo'
import HeaderLinks from './header-links'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import { bpMaxLG, bpMaxSM, bpMaxXS } from '../../lib/breakpoints'

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding-top: 4rem;
  padding-right: 12.5%;
  margin: 0 auto;
  ${bpMaxLG} {
    padding-top: 2rem;
  }
  ${bpMaxSM} {
    padding-top: 1rem;
  }
  ${bpMaxXS} {
    padding-top: 0.5rem;
  }
`

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
    <Header>
      <Logo />
      <HeaderLinks notes={false} />
      <SEO
        title={title}
        seoTitle={seoTitle}
        seoTitleAddition1={seoTitleAddition1}
        seoTitleAddition2={seoTitleAddition2}
        description={description}
        type={type}
        location={location}></SEO>
    </Header>
  )
}
