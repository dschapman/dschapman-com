import React from "react"
import {H3,H2,P,Content,Body} from '../components/StyledComponents'
import Poem from '../components/Poem'
import Header from '../components/Header'
import {Social} from '../components/social/social'

const Layout = () => {
    return(
        <Body>
        <Header title="Page Not Found (404) - D.S. Chapman"/>
        <Content>
            <br />
            <Poem title="Poem Not Found" align="center">
            I'm sorry this poem is gone; <br />
            I promise it shone like the dawn, <br />
            but now it is dark, <br />
            and the difference is stark, <br />
            I hope you won't think me a con.
            </Poem>
            <Social/>
        </Content>
        </Body>
    )

}

export default Layout