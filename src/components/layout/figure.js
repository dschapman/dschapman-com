/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'
import { bpMaxLG } from '../../lib/breakpoints'
import colors from '../../lib/colors'

function getCaption(caption) {
  if (caption == undefined) {
    return <></>
  } else {
    return <figcaption>{caption}</figcaption>
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
      max-width: 55%;
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
      line-height: 1.4;
      vertical-align: baseline;
      position: relative;
      color: ${colors.gray};
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
          {children}
          <img src={src} alt={alt} height={height} width={width} />
          {Caption}
        </figure>
      </span>
    )
  } else {
    return (
      <span css={figureStyles}>
        <figure className="fullwidth">
          {children}
          <img src={src} alt={alt} />
          {Caption}
        </figure>
      </span>
    )
  }
}

export { Figure }
