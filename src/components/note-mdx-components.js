/** @jsx jsx */
import React from 'react'
import { Styled, jsx } from 'theme-ui'
import { isString, isEmpty } from 'lodash'

const INTERNAL_LINK_REGEX = /\/notes/g
const AnchorTag = (props) => {
  const isInternallLink = !isEmpty(props.href.match(INTERNAL_LINK_REGEX))
  console.log(isInternallLink)
  let renderedLink = props.children
  if (isString(props.children)) {
    renderedLink = props.children.replace(/\[\[(.*?)\]\]/g, '$1')
  }
  if (isInternallLink) {
    return (
      <>
        <Styled.a
          {...props}
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
      </>
    )
  } else {
    return (
      <>
        <Styled.a {...props}>{renderedLink}</Styled.a>
      </>
    )
  }
}

export default {
  a: AnchorTag,
}
