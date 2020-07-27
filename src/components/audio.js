import React from 'react'

const Audio = ({ src }) => {
  return (
    <audio controls>
      <source src={src}></source>
    </audio>
  )
}

export default Audio
