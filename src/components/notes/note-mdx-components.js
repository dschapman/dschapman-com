/** @jsx jsx */
import React from 'react'
import { Styled, jsx } from 'theme-ui'
import { isString, isEmpty } from 'lodash'
import { Link } from 'gatsby'
import Tooltip from '../tooltip'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import components from '../layout/mdx-components'
import { MDXProvider } from '@mdx-js/react'

const INTERNAL_LINK_REGEX = /^\/notes/g
const INTERNAL_NON_NOTES_LINK_REGEX = /^\/(?!notes)/g
const AnchorTag = ({ href, popups = {}, ...restProps }) => {
  const isInternalNotesLink = !isEmpty(href.match(INTERNAL_LINK_REGEX))
  const isInternalLink = !isEmpty(href.match(INTERNAL_NON_NOTES_LINK_REGEX))
  let renderedLink = restProps.children
  if (isString(restProps.children)) {
    renderedLink = restProps.children.replace(/\[\[(.*?)\]\]/g, '$1')
  }

  if (isInternalNotesLink) {
    if (isEmpty(popups[href.replace(/^\/notes\//, '')])) {
      return (
        <Tooltip tiptext={`Link to note on ${renderedLink}`}>
          <Styled.a
            as={Link}
            to={href}
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
    } else {
      return (
        <Tooltip
          tiptext={
            <MDXProvider components={components}>
              <MDXRenderer>
                {popups[href.replace(/^\/notes\//, '')].body}
              </MDXRenderer>
            </MDXProvider>
          }
          placement="right"
          multiple={false}>
          <Styled.a
            as={Link}
            to={href}
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
    }
  } else if (isInternalLink) {
    return (
      <Tooltip tiptext={`Link to ${renderedLink}`}>
        <Styled.a as={Link} to={href}>
          {renderedLink}
        </Styled.a>
      </Tooltip>
    )
  } else {
    return (
      <Tooltip tiptext={`Link to ${href}`}>
        <Styled.a
          sx={{
            textDecorationColor: '#925C77',
            '&:hover': {
              color: 'text',
              textDecorationColor: '#2E0219',
            },
          }}
          {...restProps}>
          {renderedLink}
        </Styled.a>
      </Tooltip>
    )
  }
}

export default {
  a: AnchorTag,
}
