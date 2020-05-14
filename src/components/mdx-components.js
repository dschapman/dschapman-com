/** @jsx jsx */
import React from 'react'
import { Styled, jsx } from 'theme-ui'
import { isString, isEmpty } from 'lodash'
import { Link } from 'gatsby'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

const INTERNAL_LINK_REGEX = /^\//g
const AnchorTag = (props) => {
  const isInternallLink = !isEmpty(props.href.match(INTERNAL_LINK_REGEX))
  let renderedLink = props.children

  if (isInternallLink) {
    return (
      <Styled.a as={Link} to={props.href}>
        {renderedLink}
      </Styled.a>
    )
  } else {
    return <Styled.a {...props}>{renderedLink}</Styled.a>
  }
}

export default {
  a: AnchorTag,
}
