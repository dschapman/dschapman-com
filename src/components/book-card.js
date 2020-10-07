/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import book from '../../content/dschapman-com-content/assets/seasons-of-thought-cover.png'

const BookCard = () => {
  return (
    <a href="https://www.amazon.com/Seasons-Thought-D-S-Chapman/dp/0578504359">
      <img
        src={book}
        css={`
          float: left;
          width: auto;
          max-width: 11rem;
          height: auto;
          vertical-align: top;
          margin-right: 1rem;
          padding-right: 1rem;
        `}
        alt="Cover for Seasons of Thought"
      />
    </a>
  )
}

export default BookCard
