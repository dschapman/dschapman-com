/** @jsx jsx */
import React from "react"
import {H2,Content,Body} from '../../components/StyledComponents'
import Header from 'components/Header'
import EmailForm from '../../components/EmailForm'
import cover from './seasons-of-thought-cover.png'
import card from './seasons-of-thought-card.png'
import {jsx,css} from "@emotion/core"
import {mq} from "../../components/styles"
import {Social} from "../../components/social"



const Layout = () => {
    return (
        <Body>
        <Header title="Seasons of Thought - D.S. Chapman - Poetry Collection" description="A collection of poems by D.S. Chapman, available now on Amazon!" image={card} path="/poetry/seasons-of-thought/"/> 
            <Content>
                    <H2 css={css(tw`xs:text-center sm:text-center md:text-center lg:text-left xl:text-left`)}>Seasons of Thought</H2>
                    <div css={css(tw` flex xs:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-no-wrap xl:flex-no-wrap`)}>
                    <a css={css(``)} href="https://www.amazon.com/Seasons-Thought-D-S-Chapman/dp/0578504359"><img css={css(`width:auto; max-width:16rem; height:auto; ${mq[0]}{padding-right: 0;};${mq[2]}{padding-right: 2rem;};`)} src={cover}/></a>
                    <div css={css(``)}>
                        <p>Seasons of Thought is a collection of poetry that traces its themes across the changing seasons. The poems in the collection use the passage of time as a canvas to explore nature, family, childhood, faith, and other aspects of the human condition. Seasons of Thought is D.S. Chapman’s first collection of poetry. Available for purchase from Amazon now!</p>
                        <p>Sign up for the email list to be notified when this and other projects release.</p>
                    </div>
                    </div>

                    <div css={css(`display:flex; justify-content:center;`)}>
                    <EmailForm />
                    </div>
                    <Social/>
            </Content>
        </Body>
    )     
}

export default Layout
