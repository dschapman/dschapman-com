import React from 'react'
import {useSpring, animated} from 'react-spring'
import styled from '@emotion/styled'
import {mainTheme} from './styles'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.2]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function AnimatedLogo({children})  {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 170, friction: 26 } }))
    
    return (<animated.div 
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}> 
            <svg width="38px" height="37px" viewBox="0 0 38 37" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink">
                <path fill={mainTheme.primaryLight} d={children}></path>
            </svg> 
            </animated.div>)
}

class FacebookLogo extends React.Component
{   
    constructor(props) {
        super(props);
        this.state = {link: props.link};
      }
    render()
    {
        return(
            <a href={this.state.link}>
            <AnimatedLogo>M37.7,34.6 C37.7,35.7 36.8,36.6 35.7,36.6 L26.3,36.6 L26.3,22.4 L31.1,22.4 L31.8,16.9 L26.3,16.9 L26.3,13.4 C26.3,11.8 26.7,10.7 29,10.7 L31.9,10.7 L31.9,5.7 C31.4,5.6 29.7,5.5 27.6,5.5 C23.4,5.5 20.5,8.1 20.5,12.8 L20.5,16.9 L15.7,16.9 L15.7,22.4 L20.5,22.4 L20.5,36.6 L2.9,36.6 C1.8,36.6 0.9,35.7 0.9,34.6 L0.9,2 C0.9,0.9 1.8,0 2.9,0 L35.6,0 C36.7,0 37.6,0.9 37.6,2 L37.6,34.6 L37.7,34.6 Z</AnimatedLogo>
            </a>
        );
    }
}

class InstagramLogo extends React.Component
{   
    constructor(props) {
        super(props);
        this.state = {color: props.color, link: props.link};
    }
render(){
    
    return(
        <a href={this.state.link}>
        <AnimatedLogo>M33.1,0.1 L5.2,0.1 C2.8,0.1 0.8,2 0.8,4.4 L0.8,32.4 C0.8,34.8 2.8,36.7 5.2,36.7 L33.1,36.7 C35.5,36.7 37.5,34.8 37.5,32.4 L37.5,4.4 C37.4,2.1 35.5,0.1 33.1,0.1 Z M27.1,5.9 C27.1,5.3 27.6,4.8 28.2,4.8 L31.6,4.8 C32.2,4.8 32.7,5.3 32.7,5.9 L32.7,9.3 C32.7,9.9 32.2,10.4 31.6,10.4 L28.2,10.4 C27.6,10.4 27.1,9.9 27.1,9.3 L27.1,5.9 Z M19.1,11.5 C23,11.5 26.2,14.6 26.2,18.5 C26.2,22.4 23,25.5 19.1,25.5 C15.2,25.5 12.1,22.4 12.1,18.5 C12.1,14.6 15.2,11.5 19.1,11.5 Z M34,32.2 C34,32.8 33.5,33.3 32.9,33.3 L5.4,33.3 C4.8,33.3 4.3,32.8 4.3,32.2 L4.3,15 L8.9,15 C8.3,15.9 8.1,17.5 8.1,18.5 C8.1,24.6 13.1,29.6 19.3,29.6 C25.5,29.6 30.5,24.6 30.5,18.5 C30.5,17.5 30.4,15.9 29.6,15 L34.2,15 L34.2,32.2 L34,32.2 Z</AnimatedLogo>
        </a>
    );
}
}

class TwitterLogo extends React.Component
{   
    constructor(props) {
        super(props);
        this.state = {color: props.color, link: props.link};
      }
render(){
    return(
        <a href={this.state.link}>
                <AnimatedLogo>M36.4,1.3 C34.9,2.2 33.3,2.9 31.5,3.2 C30.1,1.7 28.1,0.7 25.9,0.7 C21.7,0.7 18.2,4.2 18.2,8.6 C18.2,9.2 18.3,9.8 18.4,10.4 C12,10.1 6.4,6.9 2.6,2.2 C1.9,3.4 1.6,4.7 1.6,6.2 C1.6,8.9 3,11.3 5,12.8 C3.7,12.8 2.6,12.4 1.5,11.8 L1.5,11.9 C1.5,15.7 4.1,18.9 7.7,19.6 C7.1,19.8 6.4,19.9 5.7,19.9 C5.2,19.9 4.7,19.9 4.3,19.8 C5.3,22.9 8.1,25.2 11.5,25.3 C8.9,27.4 5.6,28.7 2,28.7 C1.4,28.7 0.8,28.7 0.2,28.6 C3.6,30.8 7.6,32.1 12,32.1 C26.1,32.1 33.9,20.1 33.9,9.7 C33.9,9.4 33.9,9 33.9,8.7 C35.4,7.6 36.7,6.2 37.7,4.6 C36.3,5.2 34.8,5.7 33.3,5.8 C34.6,4.7 35.8,3.2 36.4,1.3 Z</AnimatedLogo>
        </a>
    );
}
}

const SocialWrapper = styled('div')
`
    display:flex;
    justify-content: space-around;
    padding-top:1rem;
    overflow-y:visible;

`

const Footer = styled('div')`
padding-top:1rem;
text-align:center;
font-size: .75rem;
padding-bottom:1rem;
`

class Social extends React.Component{
    
    render(){
        return(
            <div className="Footer">
            <SocialWrapper>
                <FacebookLogo link="https://www.facebook.com/dschapmanbooks/" />
                <InstagramLogo link="https://www.instagram.com/dschapmanbooks/" />
                <TwitterLogo link="https://twitter.com/ds_chapman"/>
            </SocialWrapper>
            <a href="https://github.com/dschapman/PersonalBlog">Source Code</a>
            </div>
        );
    }

}

export {Social}