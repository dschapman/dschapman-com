import React from "react"
import {H2,Content,Body} from '../../components/StyledComponents'
import Header from 'components/Header'
import EmailForm from '../../components/EmailForm'
import {withPrefix} from "gatsby"
import {css} from "react-emotion"
import Poem from "../../components/Poem"


const Layout = () => {
    return (
        <Body>
        <Header title="Seasons of Thought - D.S. Chapman - Poetry Collection" description="A collection of poems by D.S. Chapman, coming soon!" image="/poetry/seasons-of-thought/card.png" path="/poetry/seasons-of-thought/"/> 
            <Content>
            
                <div css={css(`display:flex; justify-content:space-evenly; flex-wrap: wrap; flex-basis:auto;`)}>
                    <div css={css(`display: flex; flex-direction: column; max-width: 25rem;`)}>
                        <H2 css={css(tw`xs:text-center sm:text-center md:text-center lg:text-left xl:text-left`)}>Seasons of Thought</H2>
                        <p>Seasons of Thought is a collection of poems that traces its themes through the seasons of the year.</p>
                    </div>
                    <div css={css(`max-width:25rem; padding-top:2rem;`)}>
                    <div>Make sure to sign up for the email list and get notified when the book releases on Amazon this June!</div>
                    <EmailForm css={css(``)} color="blue"/>
                    </div>
                </div>
            </Content>
        </Body>
    )     
}

export default Layout
