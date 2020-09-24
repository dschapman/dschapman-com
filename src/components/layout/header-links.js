import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import colors from '../../lib/colors'
const Nav = styled.nav`
  display: flex;
  width: 100%;
`

const NavLink = styled(Link)`
  padding: 1rem;
  font-size: 1.5rem;
  color: ${colors.text};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 3px;
   &:hover {
        text-decoration: underline;
        text-decoration-thickness: 1px;
      },
`

export default () => {
  return (
    <Nav>
      <NavLink to="/">D.S. Chapman</NavLink>
      <NavLink to="/articles">Articles</NavLink>
      <NavLink to="/poetry">Poetry</NavLink>
      <NavLink to="/notes">Notes</NavLink>
    </Nav>
  )
}
