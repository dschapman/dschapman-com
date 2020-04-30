/** @jsx jsx */
import React from 'react'
import { Link } from 'gatsby'
import { Styled, jsx } from 'theme-ui'

const MyCustomBreadcrumb = ({ crumbs }) => {
  return (
    <div>
      {crumbs.map((crumb) => {
        return (
          <div style={{ display: 'inline' }} key={crumb.pathname}>
            <Styled.a
              as={Link}
              to={crumb.pathname}
              style={{ ...crumb.crumbStyle }}
              activeStyle={{ ...crumb.crumbActiveStyle }}
              key={crumb.pathname}>
              {crumb.crumbLabel}
            </Styled.a>
            {crumb.crumbSeparator || ' / '}
          </div>
        )
      })}
    </div>
  )
}

export default MyCustomBreadcrumb
