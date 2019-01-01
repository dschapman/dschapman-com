import React from "react"
import {H2,P,Content,Body} from '../../styles/StyledComponents'
import Header from 'components/Header'
import EmailForm from '../../components/EmailForm'
import {withPrefix} from "gatsby"
import {css} from "react-emotion"

const Layout = () => {
    return (
        <Body>
        <Header /> 
            <Content>
                <H2 className={css(tw`xs:text-center sm:text-center md:text-center lg:text-left xl:text-left`)}>Seasons of Thought</H2>
                <P>A  poetry collection coming 2019 that traces its themes through the seasons of the year. For more information make sure to enter your email below!</P>
                <div className={css(tw`flex justify-center`)}>
                   <EmailForm className={css(tw`w-full`)}/>
                </div>
            </Content>
        </Body>
    )     
}

export default Layout
