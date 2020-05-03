/** @jsx jsx */
import React from 'react'
import { Styled, jsx } from 'theme-ui'
import { isString, isEmpty } from 'lodash'
import { Link } from 'gatsby'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

const INTERNAL_LINK_REGEX = /^\/notes/g
const AnchorTag = (props) => {
  const isInternallLink = !isEmpty(props.href.match(INTERNAL_LINK_REGEX))
  let renderedLink = props.children
  if (isString(props.children)) {
    renderedLink = props.children.replace(/\[\[(.*?)\]\]/g, '$1')
  }
  if (isInternallLink) {
    return (
      <Tippy content={`Notes on ${renderedLink}`}>
        <Styled.a
          as={Link}
          to={props.href}
          sx={{
            bg: 'lightblue',
            textDecoration: 'none',
            '&:hover': {
              color: 'text',
              bg: 'white',
            },
          }}>
          {renderedLink}
        </Styled.a>
      </Tippy>
    )
  } else {
    return (
      <Tippy content={`Link to ${props.href}`}>
        <Styled.a {...props}>{renderedLink}</Styled.a>
      </Tippy>
    )
  }
}

export default {
  a: AnchorTag,
}
