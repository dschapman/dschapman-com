/** @jsx jsx */
import React from 'react'
import { jsx, Styled } from 'theme-ui'
import book from '../../content/dschapman-com-content/assets/seasons-of-thought-cover.png'

const BookCard = () => {
  return (
    <a href="https://www.amazon.com/Seasons-Thought-D-S-Chapman/dp/0578504359">
      <img
        src={book}
        sx={{
          float: 'left',
          width: 'auto',
          maxWidth: '11rem',
          height: 'auto',
          verticalAlign: 'top',
          marginRight: '1rem',
          paddingRight: '1rem',
        }}
        alt="Cover for Seasons of Thought"
      />
    </a>
  )
}

export default BookCard
