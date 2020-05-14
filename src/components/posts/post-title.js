import React from 'react'
import { Styled } from 'theme-ui'

export default (props) => (
  <Styled.h1
    sx={{
      variant: 'styles.posttitle',
    }}
    {...props}
  />
)
