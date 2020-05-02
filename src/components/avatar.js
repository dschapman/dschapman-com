/** @jsx jsx */
import React from 'react'
import { jsx, Styled } from 'theme-ui'
import avatar from '../../content/assets/avatar.jpg'

const Avatar = () => {
  return (
    <div>
      <img
        sx={{
          float: 'left',
          width: 'auto',
          maxWidth: '10rem',
          height: 'auto',
          borderRadius: '99999px',
          verticalAlign: 'top',
          marginRight: '2rem',
        }}
        src={avatar}
      />
    </div>
  )
}

export default Avatar
