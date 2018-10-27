import React from "react"
import { Parallax, ParallaxLayer } from 'react-spring'
import Header from '../components/Header'

const Layout = () => {
    return (
        <div>
        <Parallax pages={3}>

            <Header />
            <ParallaxLayer offset={0} speed={1}>
            <div>
                <h1>About Me</h1>
                <div>
                <p>
                    I'm awesome!
                </p>
                </div>
            </div>
            </ParallaxLayer>
        </Parallax>
        </div>
    )     
}

export default Layout