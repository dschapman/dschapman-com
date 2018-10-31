import React from "react"
import { Parallax, ParallaxLayer } from 'react-spring'
import Header from '../components/Header'
import {Container, Text} from '../styles/StyledComponents'


const Layout = () => {
    return (
        <Container>
        <Parallax pages={3} style={{backgroundColor: "#ffff"}}>
            <ParallaxLayer offset={0} speed={.5}>
            <Header />
            <Container>
                <h1 style={{textAlign: "center"}}>Richard Hamming on Luck</h1>
                <Container>
                <Text>
                    From Richard Hamming’s classic and must-read talk, “
                    <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
                    You and Your Research
                    </a>
                    ”.
                </Text>
                <blockquote>
                    <Text>
                    There is indeed an element of luck, and no, there isn’t. The prepared
                    mind sooner or later finds something important and does it. So yes, it
                    is luck.{" "}
                    <em>
                        The particular thing you do is luck, but that you do something is
                        not.
                    </em>
                    </Text>
                </blockquote>
                </Container>
                <Text>Posted April 09, 2011</Text>
            </Container>
            </ParallaxLayer>
        </Parallax>
        </Container>
    )     
}

export default Layout