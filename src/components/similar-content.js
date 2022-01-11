/** @jsx jsx */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { PostLinkStyled, Description, PostListStyled } from './posts/post-list'
import { jsx, css } from '@emotion/react'
import colors from './../lib/colors'
import { InternalLink } from './layout/links'

export const useContentMdx = () => {
  return useStaticQuery(graphql`
    query ContentMdx {
      content: allMdx(
        filter: {
          fileAbsolutePath: { regex: "/dschapman-com-content/[poems|posts]/" }
        }
      ) {
        nodes {
          frontmatter {
            slug
            title
            excerpt
            published
            tags
            featured
          }
          slug
        }
      }
      blog: allMdx(
        filter: { fileAbsolutePath: { regex: "/dschapman-com-content/blog/" } }
      ) {
        nodes {
          excerpt
          slug
          frontmatter {
            date
            title
            published
            tags
            featured
          }
        }
      }
    }
  `)
}

export default ({ type, tags, title }) => {
  let color = colors.blue
  const data = useContentMdx()
  let matches = {}
  tags.filter((tag) =>
    data.content.nodes.forEach((node) => {
      if (node.frontmatter.tags !== null) {
        if (node.frontmatter.tags.indexOf(tag) != -1) {
          if (node.frontmatter.title in matches) {
            matches[node.frontmatter.title].points++
            matches[node.frontmatter.title].tags.push(tag)
          } else if (node.frontmatter.title != title) {
            if (node.frontmatter.featured == true) {
              matches[node.frontmatter.title] = {
                points: 2,
                slug: node.frontmatter.slug,
                tags: [tag],
                title: node.frontmatter.title,
                description: node.frontmatter.excerpt,
              }
            } else {
              matches[node.frontmatter.title] = {
                points: 1,
                slug: node.frontmatter.slug,
                tags: [tag],
                title: node.frontmatter.title,
                description: node.frontmatter.excerpt,
              }
            }
          }
        }
      }
    })
  )

  tags.filter((tag) =>
    data.blog.nodes.forEach((node) => {
      if (node.frontmatter.tags !== null) {
        if (node.frontmatter.tags.indexOf(tag) != -1) {
          if (node.frontmatter.title in matches) {
            matches[node.frontmatter.title].points++
            matches[node.frontmatter.title].tags.push(tag)
          } else if (node.frontmatter.title != title) {
            if (node.frontmatter.featured == true) {
              matches[node.frontmatter.title] = {
                points: 2,
                slug: node.slug,
                tags: [tag],
                title: node.frontmatter.title,
                description: node.excerpt,
              }
            } else {
              matches[node.frontmatter.title] = {
                points: 1,
                slug: `/blog/${node.frontmatter.date.substring(
                  0,
                  4
                )}/${node.frontmatter.date.substring(5, 7)}/${node.slug}`,
                tags: [tag],
                title: node.frontmatter.title,
                description: node.excerpt,
              }
            }
          }
        }
      }
    })
  )

  let matchesArray = Object.values(matches)
  matchesArray.sort((a, b) => (a.points < b.points ? 1 : -1))
  matchesArray = matchesArray.slice(0, 3)
  if (matchesArray.length > 0) {
    return (
      <>
        <h2>Other things to read</h2>
        <PostListStyled>
          {matchesArray.map((match) => {
            return (
              <PostLinkStyled
                key={match.slug}
                css={css`
                  &:hover {
                    border-color: ${color};
                  }
                `}>
                <InternalLink to={match.slug}>{match.title}</InternalLink>
                <Description>{match.description}</Description>
              </PostLinkStyled>
            )
          })}
        </PostListStyled>
      </>
    )
  } else {
    return <></>
  }
}
