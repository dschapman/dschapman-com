import React from "react"
import { Parallax, ParallaxLayer } from 'react-spring'
import {H2,P,Body} from '../styles/StyledComponents'
import Header from '../components/Header'
import EmailForm from '../components/EmailForm'
import avatar from '../images/avatar.jpg'

const Layout = () => {
    return (
        <div>
        <Header /> 
            <Body>
                <H2>About Me</H2>
                <div className={'flex-container'} style={{display: 'flex',}}>
                    <div style={{width: '100px'}}/>
                    <div><a href="https://twitter.com/ds_chapman"><img src={avatar} style={{borderRadius: '50%', width: '200px', minWidth: '125px'}} alt="D. S. Chapman" /></a></div>
                    <div style={{width: '40px'}}/> 
                    <div>
                        <P>I am a Writer and Poet from the Pacific Northwest, now living and working in Northern Virgina. Explore this site to view some samples of my work including my poetry. </P>
                        <P>If you are interested in receiving updates when I release major projects, enter your email below.</P>
                    </div>
                </div>
                <div className={'flex-container'} style={{display: 'flex', justifyContent: 'center'}}>
                <EmailForm />
                </div>
            </Body>
        </div>
    )     
}

export default Layout