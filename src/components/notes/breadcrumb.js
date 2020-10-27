/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { InternalLink } from '../layout/links'

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
              display: inline;
            `}
            key={crumb.pathname}>
            <InternalLink
              to={crumb.pathname}
              style={{ ...crumb.crumbStyle }}
              activeStyle={{ ...crumb.crumbActiveStyle }}
              key={crumb.pathname}>
              {crumb.crumbLabel}
            </InternalLink>

            {crumb.crumbSeparator || ' / '}
          </div>
        )
      })}
    </div>
  )
}

export default MyCustomBreadcrumb
