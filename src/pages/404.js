import React from "react"
import {H3,H2,P,Content,Body} from '../styles/StyledComponents'
import Header from 'components/Header'

const Layout = () => {
    return(
        <Body>
        <Header/>
        <Content>
            <div>Sorry that poem hasn't been written yet.</div>
        </Content>
        </Body>
    )

}

export default Layout