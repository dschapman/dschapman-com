import React from 'react'

const Audio = ({ src }) => {
  let recording
  if (src == null) {
    recording = false
  } else {
    recording = src
  }
  return src ? (
    <audio controls>
      <source src={src}></source>
    </audio>
  ) : (
    <></>
  )
}

export default Audio
