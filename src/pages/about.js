import React from "react"
import {H2,P,Content,Body} from '../styles/StyledComponents'
import Header from '../components/Header'
import EmailForm from '../components/EmailForm'
import avatar from '../images/avatar.jpg'
import {css} from "react-emotion"

const Layout = () => {
    return (
        <Body>
        <Header /> 
            <Content>
                <H2 className={css(tw`xs:text-center sm:text-center md:text-center lg:text-left xl:text-left`)}>About Me</H2>
                <div className={css(tw`flex xs:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-no-wrap xl:flex-no-wrap xs:justify-center sm:justify-center md:justify-center`)}>
                    <div><a href="https://twitter.com/ds_chapman"><img src={avatar} className={css(tw`rounded-full max-w-xxs `)} alt="Follow D.S. Chapman on Twitter." title="Follow D.S. Chapman on Twitter." /></a></div>
                    <div className={css(tw`w-4 xs:w-0 sm:w-0 md:w-0 lg:w-16 xl:w-16`)}/> 
                    <div>
                        <P>I am a Writer and Poet from the Pacific Northwest, now living and working in Northern Virgina. Explore this site to view some samples of my work, including my upcoming poetry collection. </P>
                        <P>If you are interested in receiving updates when I release major projects, enter your email below.</P>
                    </div>
                </div>
                <div className={css(tw`flex justify-center`)}>
                   <EmailForm className={css(tw`w-full`)}/>
                </div>
            </Content>
        </Body>
    )     
}

export default Layout
