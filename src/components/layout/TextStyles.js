/** @jsx jsx */
import React from 'react'
import { Styled, jsx } from 'theme-ui'

export const Callout = ({ children }) => {
  return (
    <blockquote
      sx={{
        '::before': {
          content: '""',
          display: 'block',
          margin: '0 auto',
          width: '3em',
          borderTop: '2px solid #75B9BE',
          marginBottom: '.5em',
        },
        '::after': {
          content: '""',
          display: 'block',
          margin: '0 auto',
          width: '3em',
          borderTop: '2px solid #75B9BE',
          marginTop: '.5em',
        },
        width: '100%',
        textAlign: 'center',
        margin: '0.8em auto',
        fontSize: '1.3em',
        lineHeight: '1.4em',
        display: 'block',
      }}>
      {children}
    </blockquote>
  )
}
