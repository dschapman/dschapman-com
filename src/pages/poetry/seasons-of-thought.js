/** @jsx jsx */
import React from "react"
import {H2,Content,Body} from '../../components/StyledComponents'
import Header from 'components/Header'
import EmailForm from '../../components/EmailForm'
import cover from './seasons-of-thought-cover.png'
import card from './seasons-of-thought-card.png'
import {jsx,css} from "@emotion/core"
import Poem from "../../components/Poem"


const Layout = () => {
    return (
        <Body>
        <Header title="Seasons of Thought - D.S. Chapman - Poetry Collection" description="A collection of poems by D.S. Chapman, coming soon!" image={card} path="/poetry/seasons-of-thought/"/> 
            <Content>
            
                    <H2 css={css(tw`xs:text-center sm:text-center md:text-center lg:text-left xl:text-left`)}>Seasons of Thought</H2>
                    <div css={css(tw` flex xs:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-no-wrap xl:flex-no-wrap`)}>
                    <img css={css(`padding-right: 2rem; width:auto; max-height:23rem; height:auto;`)} src={cover}/>
                    <div css={css(``)}>
                        <p>Seasons of Thought is a collection of poems that traces its themes through the seasons of the year.</p>
                        <p>Make sure to sign up for the email list and get notified when the book releases on Amazon this June!</p>
                    </div>
                    </div>

                    <div css={css(`display:flex; justify-content:center;`)}>
                    <EmailForm />
                    </div>

            </Content>
        </Body>
    )     
}

export default Layout
