/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { InternalLink, InternalNotesLink } from '../layout/links'
import { bpMinXL, bpMaxLG, bpMaxMD, bpMaxXL } from '../../lib/breakpoints'

const Nav = styled.nav`
  background: white;
  width: 20%;

  ul {
    padding: 0;
    margin: 0;

    font-size: 1rem;
    li {
      display: block;
    }
  }
  ${bpMaxMD} {
    display: none;
  }

  summary {
    font-size: 1.25rem;

    ${bpMaxXL} {
      font-size: 1rem;
    }
  }
`

export default function NoteNav() {
  const data = useStaticQuery(graphql`
    query {
      notes: allMdx(
        filter: {
          fileAbsolutePath: { regex: "/Dendron/" }
          frontmatter: { published: { eq: true } }
        }
      ) {
        nodes {
          frontmatter {
            id
            title
          }
          slug
        }
      }
    }
  `)
  // Let's get these values in a form that's easier to manage
  let notes = data.notes.nodes.map((note) => {
    return {
      id: note.frontmatter.id,
      title: note.frontmatter.title,
      slug: note.slug.substring(note.slug.lastIndexOf('/') + 1),
      hierarchies: note.slug
        .substring(note.slug.lastIndexOf('/') + 1)
        .split('.'),
    }
  })
  //Now let's sort it based on the slug field
  notes = notes.sort((a, b) => {
    if (a.slug > b.slug) {
      return 1
    } else if (a.slug < b.slug) {
      return -1
    }
  })

  let topHierarchies = []

  for (let index = 0; index < notes.length; index++) {
    //check if we already created a top level hierarchy
    if (
      !topHierarchies.some(
        (hierarchy) => hierarchy.parent.slug === notes[index].hierarchies[0]
      )
    ) {
      //check if the top level note is published (because we sorted the list if it exists it should be first) if not insert a dummy object
      if (notes[index].slug === notes[index].hierarchies[0]) {
        topHierarchies.push({ parent: notes[index], children: [] })
      } else {
        topHierarchies.push({
          parent: {
            slug: notes[index].hierarchies[0],
            title: notes[index].hierarchies[0],
            id: 404,
          },
          children: [{ parent: notes[index], children: [] }],
        })
      }
    } else {
      let foundIndex1 = topHierarchies.findIndex(
        (x) => x.parent.slug === notes[index].hierarchies[0]
      )
      if (
        !topHierarchies[foundIndex1].children.some(
          (hierarchy) =>
            hierarchy.parent.slug ===
            notes[index].hierarchies[0] + '.' + notes[index].hierarchies[1]
        )
      ) {
        //check if the second level note is published (because we sorted the list if it exists it should be first) if not insert a dummy object
        if (
          notes[index].slug ===
          notes[index].hierarchies[0] + '.' + notes[index].hierarchies[1]
        ) {
          topHierarchies[foundIndex1].children.push({
            parent: notes[index],
            children: [],
          })
        } else {
          topHierarchies[foundIndex1].children.push({
            parent: {
              slug:
                notes[index].hierarchies[0] + '.' + notes[index].hierarchies[1],
              title: notes[index].hierarchies[1],
              id: 404,
            },
            children: [{ parent: notes[index], children: [] }],
          })
        }
      } else {
        let foundIndex2 = topHierarchies[foundIndex1].children.findIndex(
          (x) =>
            x.parent.slug ===
            notes[index].hierarchies[0] + '.' + notes[index].hierarchies[1]
        )
        topHierarchies[foundIndex1].children[foundIndex2].children.push({
          parent: notes[index],
          children: [],
        })
      }
    }
  }

  console.log(topHierarchies)
  return (
    <Nav>
      <h4>Table of Notes</h4>
      {topHierarchies.map((hierarchy) => {
        // non-published first-level hierarchy
        if (hierarchy.parent.id === 404) {
          return (
            <details key={hierarchy.parent.id}>
              <summary>{hierarchy.parent.title}</summary>
              <ul>
                {hierarchy.children.map((note) => {
                  // non-published second-level hierarchy
                  if (note.parent.id === 404) {
                    return (
                      <details key={note.parent.id}>
                        <summary>{note.parent.title}</summary>
                        {note.children.map((note2) => {
                          //children of non-published second-level hierarchy
                          return (
                            <li key={note2.parent.id}>
                              <InternalLink to={`/notes/${note2.parent.id}`}>
                                {note2.parent.title}
                              </InternalLink>
                            </li>
                          )
                        })}
                      </details>
                    )
                  } else {
                    //published second-level hierarchy
                    if (note.children.length === 0) {
                      // second-level hierarchy no children
                      return (
                        <li key={note.parent.id}>
                          <InternalLink to={`/notes/${note.parent.id}`}>
                            {note.parent.title}
                          </InternalLink>
                        </li>
                      )
                    } else {
                      //second-level hierarchy w/children

                      return (
                        <li key={note.parent.id}>
                          <details key={note.parent.id}>
                            <summary>
                              <InternalLink to={`/notes/${note.parent.id}`}>
                                {note.parent.title}
                              </InternalLink>
                            </summary>
                            {note.children.map((note2) => {
                              return (
                                <li key={note2.parent.id}>
                                  <InternalLink
                                    to={`/notes/${note2.parent.id}`}>
                                    {note2.parent.title}
                                  </InternalLink>
                                </li>
                              )
                            })}
                          </details>
                        </li>
                      )
                    }
                  }
                })}
              </ul>
            </details>
          )
        } else {
          return (
            <details key={hierarchy.parent.id}>
              <summary>
                <InternalLink to={`/notes/${hierarchy.parent.id}`}>
                  {hierarchy.parent.title}
                </InternalLink>
              </summary>
              <ul>
                {hierarchy.children.map((note) => {
                  if (note.parent.id === '404') {
                    return (
                      <details key={note.parent.title}>
                        <summary>{note.parent.title}</summary>

                        {note.children.map((note2) => {
                          return (
                            <li key={note2.parent.id}>
                              <InternalLink to={`/notes/${note2.parent.id}`}>
                                {note2.parent.title}
                              </InternalLink>
                            </li>
                          )
                        })}
                      </details>
                    )
                  } else if (note.children.length === 0) {
                    return (
                      <li key={note.parent.id}>
                        <InternalLink to={`/notes/${note.parent.id}`}>
                          {note.parent.title}
                        </InternalLink>
                      </li>
                    )
                  } else {
                    return (
                      <details key={note.parent.id}>
                        <summary>
                          <InternalLink to={`/notes/${note.parent.id}`}>
                            {note.parent.title}
                          </InternalLink>
                        </summary>
                        {note.children.map((note2) => {
                          return (
                            <li key={note2.parent.id}>
                              <InternalLink to={`/notes/${note2.parent.id}`}>
                                {note2.parent.title}
                              </InternalLink>
                            </li>
                          )
                        })}
                      </details>
                    )
                  }
                })}
              </ul>
            </details>
          )
        }
      })}
    </Nav>
  )
}
