/** @jsx jsx */
import React from "react"
import {H2,P,Content,Body} from '../components/StyledComponents'
import Header from '../components/Header'
import EmailForm from '../components/EmailForm'
import {withPrefix, Link} from "gatsby"
import {jsx,css} from '@emotion/core'
import {mq, mainTheme} from "../components/styles"
import {Social} from '../components/social'
import Avatar from "../components/Avatar";

const Layout = () => {
    return (
        <Body>
        <Header title="About - D.S. Chapman - Poet, Writer" path="/about/"/> 
            <Content>
                <H2 css={css`${mq[0]}{text-align: center}${mq[2]}{text-align:left}`}>About</H2>
                <div css={css(tw`flex xs:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-no-wrap xl:flex-no-wrap xs:justify-center sm:justify-center md:justify-center`)}>
                    <Avatar />
                    <div css={css(tw` w-4 xs:w-0 sm:w-0 md:w-0 lg:w-16 xl:w-16`)} /> 
                    <div>
                        <p>D.S. Chapman is a writer and poet from the Pacific Northwest, currently living and working in Northern Virginia. Explore this site for more information about him and his projects, including his upcoming poetry collection &mdash; <Link to="/poetry/seasons-of-thought">Seasons of Thought</Link>. </p>
                        <p>Enter your email to receive occasional newsletters and announcements.</p>
                    </div>
                </div>

                <div css={css`display:flex; justify-content:center;`}>
                    <EmailForm />
                </div>
                <Social/>
            </Content>
        </Body>
    )     
}

export default Layout
