import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import colors from '../../lib/colors'

export const InternalNotesLink = styled(Link)`
  background: ${colors.lightblue};
  text-decoration: none;
  color: ${colors.text};
  &:hover,
  &:focus {
    color: ${colors.text};
    background: white;
    text-decoration: underline;
    text-decoration-color: ${colors.lightblue};
  }
`
export const InternalLink = styled(Link)`
  color: #75b9be;
  text-decoration-color: #75b9be;
  &:hover {
    color: black;
    text-decoration-color: #354f59;
  }
`

export const ExternalLink = styled(Link)`
  text-decoration-color: ${colors.red};
  color: ${colors.red};
  &:hover {
    color: ${colors.text};
    text-decoration-color: #2e0219;
  }
`
