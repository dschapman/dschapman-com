/** @jsx jsx */
import { Styled, jsx, Box } from 'theme-ui'
import { Global, css } from '@emotion/core'
import { MDXProvider } from '@mdx-js/react'
import components from '../notes/note-mdx-components'
import Header from './header'
import Footer from './footer'
import Tooltip from './tooltip'
import Footnote from './footnote'
import Linktip from './linktip'
import { Callout } from './TextStyles'
import { useStaticQuery, graphql } from 'gatsby'

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
    <Styled.root>
      <Global
        styles={(theme) => ({
          '*': {
            '::selection': {
              color: '#ffffff',
              backgroundColor: '#75B9BE',
              height: '100%',
            },
          },
        })}
      />
      <Header
        title={title}
        seoTitle={seoTitle}
        seoTitleAddition1={seoTitleAddition1}
        seoTitleAddition2={seoTitleAddition2}
        description={description}
        type={type}
        location={location}
      />
      <div
        sx={{
          maxWidth: 'container',
          mx: 'auto',
          px: [3, 2, 0],
          flex: '1 0 auto',
        }}>
        <h1
          sx={{
            fontFamily: 'heading',
            fontWeight: 'heading',
          }}>
          {title}
        </h1>
        <MDXProvider
          components={{
            a: AnchorTag,
            Footnote: (props) => <Footnote {...props} />,
            Tooltip: (props) => <Tooltip {...props} />,
            Linktip: (props) => <Linktip {...props} />,
            Callout: (props) => <Callout {...props} />,
          }}>
          {children}
        </MDXProvider>
      </div>
      <Footer />
    </Styled.root>
  )
}
