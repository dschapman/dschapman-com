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
    text-decoration-thickness: 1px;
  }
`
export const InternalLink = styled(Link)`
  color: ${colors.hcbluegreen};
  text-decoration-color: ${colors.bluegreen};
  text-decoration-thickness: 1px;
  &:hover {
    color: black;
    text-decoration-color: #354f59;
  }
`

export const ExternalLink = styled(Link)`
  text-decoration-color: ${colors.red};
  text-decoration-thickness: 1px;
  color: ${colors.red};
  &:hover {
    color: ${colors.text};
    text-decoration-color: #2e0219;
  }
`
