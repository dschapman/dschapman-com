/** @jsx jsx */
import React from "react"
import {jsx,css} from '@emotion/core'
import avatar from '../images/avatar.jpg'
import {mq} from "../styles/styles"

const Avatar = () => {

    return(
    <div><img src={avatar} css={css`border-radius:9999px;${mq[0]}{max-width:10rem}${mq[1]}{max-width:11rem}${mq[3]}{max-width:10rem}`}/></div>
    )
}

export default Avatar