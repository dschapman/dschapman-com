import React from "react"
import {H3,H2,P,Content,Body} from '../styles/StyledComponents'
import Header from 'components/Header'

const Layout = () => {
    return(
        <Body>
        <Header title="Page Not Found (404) - D.S. Chapman"/>
        <Content>
            <H3>Sorry, that poem hasn't been written yet.</H3>
        </Content>
        </Body>
    )

}

export default Layout