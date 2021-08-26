/** @jsx jsx */
import React, { forwardRef } from 'react'
import Tippy from '@tippyjs/react'
import { css, jsx } from '@emotion/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/shift-away.css'
import 'tippy.js/themes/light.css'
import './tippyBox.css'
import { bpMaxLG } from '../../lib/breakpoints'

const LinktipPreview = forwardRef((props, ref) => {
  let placement
  let multiple
  if (props.placement) {
    placement = props.placement
  } else {
    placement = 'top'
  }
  if (props.multiple) {
    multiple = props.multiple
  } else {
    multiple = true
  }
  return (
    <Tippy
      duration="500"
      distance="10"
      theme="light"
      arrow={true}
      interactive={true}
      animation="shift-away"
      content={props.tiptext}
      maxWidth={868}
      placement={placement}
      multiple={multiple}
      tag="span"
      css={css`
        padding: 0.2em;
        fontsize: 0.75em;
        tippy-box {
          overflowy: auto;
        }
        ${bpMaxLG} {
          display: none;
        }
      `}>
      <span
        css={css`
          display: inline-block;
          line-height: 1em;
          transition: all 0.5s;
          &:hover,
          &:focus {
            color: text;
          }
        `}>
        <span ref={ref}>{props.children}</span>
      </span>
    </Tippy>
  )
})
export default LinktipPreview
