import React from 'react'

const Audio = ({ src }) => {
  return src ? (
    <audio controls>
      <source src={src}></source>
    </audio>
  ) : (
    <></>
  )
}

export default Audio
