import React from "react"
import { Parallax, ParallaxLayer } from 'react-spring'
import Layout from '../components/Layout'
import {DIV, P, H1} from '../styles/StyledComponents'


const MainPage = () => {
    return (
        <Layout >
        <Parallax pages={3} style={{backgroundColor: "#ffff"}}>
            <ParallaxLayer offset={0} speed={.5}>
            <Header />
            <DIV>
                <H1 style={{textAlign: "center"}}>Richard Hamming on Luck</H1>
                <DIV>
                <P>
                    From Richard Hamming’s classic and must-read talk, “
                    <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
                    You and Your Research
                    </a>
                    ”.
                </P>
                <blockquote>
                    <P>
                    There is indeed an element of luck, and no, there isn’t. The prepared
                    mind sooner or later finds something important and does it. So yes, it
                    is luck.{" "}
                    <em>
                        The particular thing you do is luck, but that you do something is
                        not.
                    </em>
                    </P>
                </blockquote>
                </DIV>
                <P>Posted April 09, 2011</P>
            </DIV>
            </ParallaxLayer>
        </Parallax>
        </Layout>
    )     
}

export default MainPage