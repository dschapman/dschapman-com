/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { css } from '@emotion/core'
import { bpMaxLG } from '../../lib/breakpoints'
import { Marginnote } from './sidenote'

function getCaption(caption) {
  if (caption == undefined) {
    return <></>
  } else {
    return <Marginnote>{caption}</Marginnote>
  }
}

const Figure = ({ children, caption, src, alt, fullwidth }) => {
  let Caption = getCaption(caption)
  const figureStyles = css`
    img {
      width: 100%;
    }

    figure {
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
      max-width: 768px;
      -webkit-margin-start: 0;
      -webkit-margin-end: 0;
      margin: 0 0 3em 0;
    }

    figcaption {
      float: right;
      clear: right;
      margin-top: 0;
      margin-bottom: 0;
      font-size: 1.1rem;
      line-height: 1.6;
      vertical-align: baseline;
      position: relative;
      max-width: 40%;
    }

    figure.fullwidth figcaption {
      margin-right: 24%;
    }
    ${bpMaxLG} {
      figure {
        max-width: 90%;
      }

      figcaption,
      figure.fullwidth figcaption {
        margin-right: 0%;
        max-width: none;
      }
      img {
        width: 100%;
      }
    }
  `
  if (fullwidth == false) {
    return (
      <span css={figureStyles}>
        <figure>
          {Caption}
          {children}
          <img src={src} alt={alt} />
        </figure>
      </span>
    )
  } else {
    return (
      <span css={figureStyles}>
        <figure className="fullwidth">
          {Caption}
          {children}
          <img src={src} alt={alt} />
        </figure>
      </span>
    )
  }
}

export { Figure }
