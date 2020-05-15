/** @jsx jsx */
import React from 'react'
import { Styled, jsx } from 'theme-ui'
import { isString, isEmpty } from 'lodash'
import { Link } from 'gatsby'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

const INTERNAL_LINK_REGEX = /^\/notes/g
const INTERNAL_NON_NOTES_LINK_REGEX = /^\/(?!notes)/g
const AnchorTag = (props) => {
  const isInternalNotesLink = !isEmpty(props.href.match(INTERNAL_LINK_REGEX))
  const isInternalLink = !isEmpty(
    props.href.match(INTERNAL_NON_NOTES_LINK_REGEX)
  )
  let renderedLink = props.children

  if (isInternalNotesLink) {
    return (
      <Styled.a
        as={Link}
        to={props.href}
        sx={{
          bg: 'lightblue',
          textDecoration: 'none',
          '&:hover,&:focus': {
            color: 'text',
            bg: 'white',
            textDecoration: 'underline',
            textDecorationColor: 'lightblue',
          },
        }}>
        {renderedLink}
      </Styled.a>
    )
  } else if (isInternalLink) {
    return (
      <Styled.a as={Link} to={props.href}>
        {renderedLink}
      </Styled.a>
    )
  } else {
    return (
      <Styled.a
        sx={{
          textDecorationColor: '#925C77',
          '&:hover': {
            color: 'text',
            textDecorationColor: '#2E0219',
          },
        }}
        {...props}>
        {renderedLink}
      </Styled.a>
    )
  }
}

export default {
  a: AnchorTag,
}
