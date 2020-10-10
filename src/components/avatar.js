/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import avatar from '../../content/dschapman-com-content/assets/avatar.jpg'

const Avatar = () => {
  return (
    <div>
      <img
        css={css`
          float: left;
          width: auto;
          max-width: 10rem;
          height: auto;
          border-radius: 99999px;
          vertical-align: top;
          margin-right: 2rem;
        `}
        src={avatar}
        alt="D.S. Chapman"
      />
    </div>
  )
}

export default Avatar
