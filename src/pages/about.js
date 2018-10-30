import React from "react"
import { Parallax, ParallaxLayer } from 'react-spring'
import Header from '../components/Header'
import EmailForm from '../components/EmailForm'
import avatar from '../images/avatar.jpg'

const Layout = () => {
    return (
        <div>
        <Parallax pages={3}>
        <ParallaxLayer offset={0} speed={.5}>
            <Header />
            <div>
                <h1 style={{textAlign: 'left'}}>About Me</h1>
                <div className={'flex-container'} style={{display: 'flex',}}>
                    <div style={{width: '100px'}}/>
                    <div><a href="https://twitter.com/ds_chapman"><img src={avatar} style={{borderRadius: '50%', width: '200px', minWidth: '125px'}} alt="D. S. Chapman" /></a></div>
                    <div style={{width: '40px'}}/> 
                    <div>
                        <p>I am a Writer and Poet from the Pacific Northwest, now living and working in Northern Virgina. Explore this site to view some samples of my work including my poetry. </p>
                        <p>If you are interested in receiving updates when I release major projects, enter your email below.</p>
                    </div>
                </div>
                <div className={'flex-container'} style={{display: 'flex', justifyContent: 'center'}}>
                <EmailForm />
                </div>
            </div>
            </ParallaxLayer>
        </Parallax>
        </div>
    )     
}

export default Layout