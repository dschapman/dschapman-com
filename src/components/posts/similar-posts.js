/** @jsx jsx */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { PostLink, Description } from './post-list'
import { jsx, css } from '@emotion/core'
import colors from '../../lib/colors'
import { InternalLink } from '../layout/links'

export const useContentMdx = () => {
  return useStaticQuery(graphql`
    query ContentMdx {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/dschapman-com-content/" } }
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
    }
  `)
}

export default ({ type, tags, title }) => {
  let color = colors.blue
  const data = useContentMdx()
  let matches = {}
  tags.filter((tag) =>
    data.allMdx.nodes.forEach((node) => {
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
  let matchesArray = Object.values(matches)
  matchesArray.sort((a, b) => (a.points < b.points ? 1 : -1))
  matchesArray = matchesArray.slice(0, 3)
  console.log(matchesArray)
  return (
    <>
      <h2>Related Content</h2>
      {matchesArray.map((match) => {
        return (
          <PostLink
            key={match.slug}
            css={css`
              &:hover {
                border-color: ${color};
              }
            `}>
            <InternalLink to={match.slug}>{match.title}</InternalLink>
            <Description>{match.description}</Description>
          </PostLink>
        )
      })}
    </>
  )
}
