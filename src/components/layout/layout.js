import React from 'react'
import '../global.css'
import { MDXProvider } from '@mdx-js/react'
import components from './mdx-components-with-previews'
import Header from './header'
import Footer from './footer'
import Tooltip from './tooltip'
import { Footnote, Marginnote } from './sidenote'
import { Figure } from './figure'
import Linktip from './linktip'
import { Callout } from './TextStyles'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

export const useAllMdx = () => {
  return useStaticQuery(graphql`
    query AllMdx {
      allMdx(
        filter: {
          fileAbsolutePath: { regex: "/dschapman-com-content|Dendron/" }
        }
      ) {
        nodes {
          frontmatter {
            slug
            title
            id
            published
            tags
          }
          slug
          body
          fileAbsolutePath
        }
      }
    }
  `)
}

export const Root = styled.root``
export const Main = styled.main`
  padding: 1rem 0rem;
`

export default ({
  children,
  title,
  description,
  seoTitle,
  seoTitleAddition1,
  seoTitleAddition2,
  type,
  location,
  className,
}) => {
  const data = useAllMdx()
  const popups = {}
  const posts = data.allMdx.nodes
  posts.map((post) => {
    if (post) {
      popups[`${post.slug.substring(post.slug.lastIndexOf('/') + 1)}`] = {
        title: post.frontmatter.title,
        body: post.body,
        slug: post.frontmatter.slug,
        dendronId: post.frontmatter.id,
        published: post.frontmatter.published,
      }
    }
  })
  const AnchorTag = (props) => <components.a {...props} popups={popups} />
  return (
    <Root className={`${className ? className : ''}`}>
      <Header
        title={title}
        seoTitle={seoTitle}
        seoTitleAddition1={seoTitleAddition1}
        seoTitleAddition2={seoTitleAddition2}
        description={description}
        type={type}
        location={location}
      />
      <Main>
        <h1>{title}</h1>
        <MDXProvider
          components={{
            a: AnchorTag,
            Footnote: (props) => <Footnote {...props} />,
            Tooltip: (props) => <Tooltip {...props} />,
            Linktip: (props) => <Linktip {...props} />,
            Callout: (props) => <Callout {...props} />,
            Marginnote: (props) => <Marginnote {...props} />,
            Figure: (props) => <Figure {...props} />,
          }}>
          {children}
        </MDXProvider>
      </Main>
      <Footer />
    </Root>
  )
}
