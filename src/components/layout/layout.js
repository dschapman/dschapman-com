import React from 'react'
import '../global.css'
import { MDXProvider } from '@mdx-js/react'
import components from '../notes/note-mdx-components'
import Header from './header'
import Footer from './footer'
import Tooltip from './tooltip'
import { Footnote, Marginnote } from './sidenote'
import { Figure } from './figure'
import Linktip from './linktip'
import { Callout } from './TextStyles'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

export const Root = styled.root`
  ${'' /* display: flex;
  flex-direction: column;
  font-family: body;
  lineheight: body;
  fontweight: body;
  fontsize: 2;
  textrendering: 'optimizeLegibility';
  webkitfontsmoothing: 'antialiased';
  margin-bottom: [4, 5, 6];
  height: '100vh'; */}
`
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
}) => {
  const data = useStaticQuery(graphql`
    query BrainNoteAndAllMdx {
      allBrainNote {
        nodes {
          slug
          title
          childMdx {
            body
          }
        }
      }
      allMdx(
        filter: { fileAbsolutePath: { regex: "/content/", ne: "notes" } }
      ) {
        nodes {
          frontmatter {
            tags
            slug
            title
          }
          id
          body
        }
      }
    }
  `)
  const popups = {}
  const notes = data.allBrainNote.nodes
  const posts = data.allMdx.nodes
  posts.map((post) => {
    if (post) {
      popups[`${post.frontmatter.slug}`] = {
        title: post.frontmatter.title,
        body: post.body,
      }
    }
  })

  notes.map((note) => {
    if (note) {
      popups[`/notes/${note.slug}`] = {
        title: note.title,
        body: note.childMdx.body,
      }
    }
  })
  const AnchorTag = (props) => <components.a {...props} popups={popups} />
  return (
    <Root>
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
