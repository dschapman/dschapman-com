/** @jsx jsx */
import React from 'react'
import { Styled, jsx } from 'theme-ui'
import { isString, isEmpty } from 'lodash'
import { Link } from 'gatsby'
import Tooltip from '../tooltip'

const INTERNAL_LINK_REGEX = /^\/notes/g
const INTERNAL_NON_NOTES_LINK_REGEX = /^\/(?!notes)/g
const AnchorTag = (props) => {
  const isInternalNotesLink = !isEmpty(props.href.match(INTERNAL_LINK_REGEX))
  const isInternalLink = !isEmpty(
    props.href.match(INTERNAL_NON_NOTES_LINK_REGEX)
  )
  let renderedLink = props.children
  if (isString(props.children)) {
    renderedLink = props.children.replace(/\[\[(.*?)\]\]/g, '$1')
  }
  if (isInternalNotesLink) {
    return (
      <Tooltip tiptext={`Notes on ${renderedLink}`}>
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
      </Tooltip>
    )
  } else if (isInternalLink) {
    return (
      <Tooltip tiptext={`Link to ${renderedLink}`}>
        <Styled.a as={Link} to={props.href}>
          {renderedLink}
        </Styled.a>
      </Tooltip>
    )
  } else {
    return (
      <Tooltip tiptext={`Link to ${props.href}`}>
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
      </Tooltip>
    )
  }
}

export default {
  a: AnchorTag,
}
