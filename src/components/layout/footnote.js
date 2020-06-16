/** @jsx jsx */
import React from 'react'
import Linktip from './linktip'
import { Styled, jsx } from 'theme-ui'

const Footnote = ({ count, children }) => {
  return (
    <Linktip tiptext={children}>
      <span
        sx={{
          verticalAlign: 'super',
          fontSize: '90%',
          color: '#75B9BE',
        }}>
        {count}
      </span>
    </Linktip>
  )
}

export default Footnote
