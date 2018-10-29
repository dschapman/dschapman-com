import React from "react"
import { Parallax, ParallaxLayer } from 'react-spring'
import Header from '../components/Header'


const Layout = () => {
    return (
        <div>
        <Parallax pages={3} style={{backgroundColor: "#ffff"}}>
            <ParallaxLayer offset={0} speed={.5}>
            <Header />
            <div>
                <h1 style={{textAlign: "center"}}>Richard Hamming on Luck</h1>
                <div>
                <p>
                    From Richard Hamming’s classic and must-read talk, “
                    <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
                    You and Your Research
                    </a>
                    ”.
                </p>
                <blockquote>
                    <p>
                    There is indeed an element of luck, and no, there isn’t. The prepared
                    mind sooner or later finds something important and does it. So yes, it
                    is luck.{" "}
                    <em>
                        The particular thing you do is luck, but that you do something is
                        not.
                    </em>
                    </p>
                </blockquote>
                </div>
                <p>Posted April 09, 2011</p>
            </div>
            </ParallaxLayer>
        </Parallax>
        </div>
    )     
}

export default Layout