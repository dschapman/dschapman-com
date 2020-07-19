/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { css } from '@emotion/core'
import { bpMaxLG } from '../../lib/breakpoints'
import { useThemeUI } from 'theme-ui'

const Footnote = ({ count, children }) => {
  const { theme } = useThemeUI()

  const footnoteStyles = css`
    .sidenote,
    .marginnote {
      float: right;
      clear: right;
      margin-right: -45%;
      width: 40%;
      margin-top: 6px;
      margin-bottom: 6px;
      font-size: 0.82em;
      opacity: 85%;
      line-height: 1.3;
      vertical-align: baseline;
      position: relative;
      border-left: 2px solid ${theme.colors.bluegreen};
      padding-left: 1em;
    }

    .sidenote-number {
      counter-increment: sidenote-counter;
    }

    .sidenote-number:after,
    .sidenote:before {
      position: relative;
      vertical-align: baseline;
    }

    .sidenote-number:after {
      content: counter(sidenote-counter);
      font-size: 0.9em;
      top: -0.5rem;
      left: 0em;
      padding-right: 3px;
      color: ${theme.colors.gray};
    }

    .sidenote:before {
      content: counter(sidenote-counter) ' ';
      font-size: 0.9em;
      top: -0.3rem;
      padding-right: 8px;
    }

    blockquote .sidenote,
    blockquote .marginnote {
      margin-right: -82%;
      min-width: 59%;
      text-align: left;
    }

    label.sidenote-number {
      display: inline;
    }

    label.margin-toggle:not(.sidenote-number) {
      display: none;
    }
    input.margin-toggle {
      display: none;
    }
    ${bpMaxLG} {
      label.margin-toggle:not(.sidenote-number) {
        display: inline;
      }

      .sidenote,
      .marginnote {
        display: none;
      }

      .margin-toggle:checked + .sidenote,
      .margin-toggle:checked + .marginnote {
        display: block;
        float: left;
        left: 1rem;
        clear: both;
        width: 95%;
        margin: 1rem 2.5%;
        vertical-align: baseline;
        position: relative;
      }
      label {
        cursor: pointer;
      }
    }
  `

  return (
    <span css={footnoteStyles}>
      <label
        htmlFor={`fn-${count}`}
        className="sidenote-number margin-toggle"></label>
      <input type="checkbox" id={`fn-${count}`} className="margin-toggle" />
      <span className="sidenote">{children}</span>
    </span>
  )
}

const Marginnote = ({ count, children }) => {
  const { theme } = useThemeUI()

  const marginnoteStyles = css`
    .marginnote {
      float: right;
      clear: right;
      margin-right: -45%;
      width: 40%;
      margin-top: 6px;
      margin-bottom: 6px;
      font-size: 0.82em;
      opacity: 85%;
      line-height: 1.3;
      vertical-align: baseline;
      position: relative;
      border-left: 2px solid ${theme.colors.bluegreen};
      padding-left: 1em;
    }

    .marginnote-marker {
      font-size: 0.9em;
      top: -0.5rem;
      left: 0em;
      padding-right: 3px;
      padding-left: 3px;
      color: ${theme.colors.gray};
    }

    .sidenote-number:after,
    .sidenote:before {
      position: relative;
      vertical-align: baseline;
    }

    .sidenote-number:after {
      content: counter(sidenote-counter);
    }

    .sidenote:before {
      content: counter(sidenote-counter) ' ';
      font-size: 0.9em;
      top: -0.3rem;
      padding-right: 8px;
    }

    blockquote .marginnote {
      margin-right: -82%;
      min-width: 59%;
      text-align: left;
    }

    label.sidenote-number {
      display: inline;
    }

    label.margin-toggle:not(.sidenote-number) {
      display: none;
    }
    input.margin-toggle {
      display: none;
    }
    ${bpMaxLG} {
      label.margin-toggle:not(.sidenote-number) {
        display: inline;
      }

      .sidenote,
      .marginnote {
        display: none;
      }

      .margin-toggle:checked + .marginnote {
        display: block;
        float: left;
        left: 1rem;
        clear: both;
        width: 95%;
        margin: 1rem 2.5%;
        vertical-align: baseline;
        position: relative;
      }
      label {
        cursor: pointer;
      }
    }
  `

  return (
    <span css={marginnoteStyles}>
      <label
        htmlFor={`mn-${count}`}
        className="margin-toggle marginnote-marker">
        &#8853;
      </label>
      <input type="checkbox" id={`mn-${count}`} className="margin-toggle" />
      <span className="marginnote">{children}</span>
    </span>
  )
}

export { Footnote, Marginnote }
