/** @jsx jsx */
import React from 'react'
import { jsx, Styled } from 'theme-ui'
import book from '../../content/assets/seasons-of-thought-cover.png'

const BookCard = () => {
  return (
    <div>
      <img
        src={book}
        sx={{
          float: 'left',
          width: 'auto',
          maxWidth: '11rem',
          height: 'auto',
          verticalAlign: 'top',
          marginRight: '1rem',
        }}
        alt="Cover for Seasons of Thought"
      />
    </div>
  )
}

export default BookCard
