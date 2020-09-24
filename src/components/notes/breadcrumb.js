/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { InternalLink } from '../layout/links'
import { Link } from 'gatsby'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'

const MyCustomBreadcrumb = ({ crumbs }) => {
  return (
    <div>
      {crumbs.map((crumb) => {
        return (
          <div
            css={css`
              text-size: 1.3rem;
            `}
            key={crumb.pathname}>
            <Tippy
              content={`Notes on ${crumb.crumbLabel}`}
              theme="light"
              placement="bottom">
              <InternalLink
                to={crumb.pathname}
                style={{ ...crumb.crumbStyle }}
                activeStyle={{ ...crumb.crumbActiveStyle }}
                key={crumb.pathname}>
                {crumb.crumbLabel}
              </InternalLink>
            </Tippy>
            {crumb.crumbSeparator || ' / '}
          </div>
        )
      })}
    </div>
  )
}

export default MyCustomBreadcrumb
