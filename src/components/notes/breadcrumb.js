/** @jsx jsx */
import React from 'react'
import { Link } from 'gatsby'
import { Styled, jsx } from 'theme-ui'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'

const MyCustomBreadcrumb = ({ crumbs }) => {
  return (
    <div>
      {crumbs.map((crumb) => {
        return (
          <div style={{ display: 'inline' }} key={crumb.pathname}>
            <Tippy
              content={`Notes on ${crumb.crumbLabel}`}
              theme="light"
              placement="bottom">
              <Styled.a
                as={Link}
                to={crumb.pathname}
                style={{ ...crumb.crumbStyle }}
                activeStyle={{ ...crumb.crumbActiveStyle }}
                key={crumb.pathname}>
                {crumb.crumbLabel}
              </Styled.a>
            </Tippy>
            {crumb.crumbSeparator || ' / '}
          </div>
        )
      })}
    </div>
  )
}

export default MyCustomBreadcrumb
