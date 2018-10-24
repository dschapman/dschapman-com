import React from "react"
import { Parallax, ParallaxLayer } from 'react-spring'
import Header from '../components/Header'

const Layout = () => {
    return (
        <div>
        <Parallax pages={3}>
            <ParallaxLayer offset={0} speed={0.5}>
            <Header />

            </ParallaxLayer>
        </Parallax>
        </div>
    )     
}

export default Layout