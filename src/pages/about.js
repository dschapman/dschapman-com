import React from "react"
import {H2,P,Content,Body} from '../styles/StyledComponents'
import Header from '../components/Header'
import EmailForm from '../components/EmailForm'
import {withPrefix} from "gatsby"
import {css} from "react-emotion"
import {S_Link} from '../components/GatsbyComponents'

const Layout = () => {
    return (
        <Body>
        <Header title="About - D.S. Chapman - Poet, Writer" path="/about/"/> 
            <Content>
                <H2 className={css(tw` text-center sm:text-center md:text-center lg:text-left xl:text-left`)}>About</H2>
                <div className={css(tw` flex xs:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-no-wrap xl:flex-no-wrap xs:justify-center sm:justify-center md:justify-center`)}>
                    <div><a href="https://twitter.com/ds_chapman"><img src={withPrefix('/images/avatar.jpg')} className={css(tw`rounded-full max-w-xxs `)} alt="Follow D.S. Chapman on Twitter." title="Follow D.S. Chapman on Twitter." /></a></div>
                    <div className={css(tw` w-4 xs:w-0 sm:w-0 md:w-0 lg:w-16 xl:w-16`)}/> 
                    <div>
                        <P>D.S. Chapman is a writer and poet from the Pacific Northwest, currently living and working in Northern Virgina. Explore this site to view some samples of his work, including excerpts from his upcoming poetry collection &mdash; <S_Link to="/poetry/seasons-of-thought">Seasons of Thought</S_Link>. </P>
                        <P>If you are interested in receiving updates when he releases major projects, enter your email below.</P>
                    </div>
                </div>
                <div className={css(tw`flex justify-center`)}>
                   <EmailForm className={css(tw`w-full`)}/>
                </div>
            </Content>
        </Body>
    )     
}

export default Layout
