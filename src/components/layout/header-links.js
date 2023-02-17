/**@jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import colors from '../../lib/colors'
import { bpMaxLG, bpMaxMD, bpMaxSM, bpMaxXS } from '../../lib/breakpoints'
const Nav = styled.nav`
  display: flex;
  width: 100%;
`

const NavLink = styled(Link)`
  padding: 1rem;
  font-size: 1.4rem;
  color: ${colors.text};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 3px;
  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 1px;
  }

  ${bpMaxLG} {
    font-size: 1.4rem;
    padding: 0.75rem;
  }
  ${bpMaxMD} {
    font-size: 1rem;
  }
  ${bpMaxSM} {
    font-size: 0.75rem;
  }
`

export default () => {
  return (
    <Nav>
      <NavLink to="/">D.S. Chapman</NavLink>
      <NavLink
        css={css`
          ${bpMaxSM} {
            font-size: 1rem;
            padding-right: 0.5rem;
          }
          ${bpMaxXS} {
            font-size: 0.75rem;
          }
        `}
        to="/articles">
        Articles
      </NavLink>
      <NavLink
        css={css`
          ${bpMaxSM} {
            font-size: 01rem;
            padding-right: 0.5rem;
          }
          ${bpMaxXS} {
            font-size: 0.75rem;
          }
        `}
        to="/poetry">
        Poetry
      </NavLink>
      <NavLink
        css={css`
          ${bpMaxSM} {
            font-size: 01rem;
            padding-right: 0.5rem;
          }
          ${bpMaxXS} {
            font-size: 0.75rem;
          }
        `}
        to="/blog">
        Blog
      </NavLink>
    </Nav>
  )
}
