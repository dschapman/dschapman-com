import React from 'react'
import styled from '@emotion/styled'
import { bpMaxLG } from '../../lib/breakpoints'

export const Callout = styled.blockquote`
  ::before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 3rem;
    border-left: none;
    border-top: 2px solid #75b9be;
    margin-bottom: 0.5em;
  }
  ::after {
    content: '';
    display: block;
    margin: 0 auto;
    width: 3rem;
    border-top: 2px solid #75b9be;
    margin-top: 0.5em;
  }
  width: 55%;
  text-align: center;
  font-size: 2rem;
  lineheight: 2rem;
  display: block;
  ${bpMaxLG} {
    margin: 0 auto;
  }
`
export const Blockquote = styled.blockquote`
  border-left: 10px solid #75b9be;
  margin: 1.5rem 10px;
  padding: 0 20px;
  font-size: 1.4rem;
`
