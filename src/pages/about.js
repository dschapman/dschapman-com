/** @jsx jsx */
import React from "react"
import {H1,P,Content,Body, H3} from '../components/StyledComponents'
import Header from '../components/Header'
import EmailForm from '../components/EmailForm'
import {withPrefix, Link} from "gatsby"
import {jsx,css} from '@emotion/core'
import {mq, mainTheme} from "../components/styles"
import {Social} from '../components/social'
import Avatar from "../components/Avatar";
import Layout from '../components/Layout'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const About = () => {
    return (
        <Layout title="About - D.S. Chapman - Poet, Writer" path="/about/">
                <H1 css={css`${mq[0]}{text-align: center}${mq[2]}{text-align:left}`}>About</H1>
                <div css={css(tw`flex xs:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-no-wrap xl:flex-no-wrap xs:justify-center sm:justify-center md:justify-center`)}>
                    <Avatar />
                    <div css={css(tw` w-4 xs:w-0 sm:w-0 md:w-0 lg:w-16 xl:w-16`)} /> 
                    <div>
                        <p>D.S. Chapman is a writer and poet from the Pacific Northwest, currently living and working in Northern Virginia. Explore this site for more information about him and his projects, including his poetry collection &mdash; <Link to="/poetry/seasons-of-thought">Seasons of Thought</Link>, available now on Amazon! </p>
                        <p>Enter your email below to receive occasional newsletters and announcements.</p>
                    </div>
                </div>
                <H3 css={css`margin-bottom: .75rem;;`}>Additional Links</H3>
                <ul>
                    <li><OutboundLink href="https://www.goodreads.com/author/show/19228078.D_S_Chapman">Follow on Goodreads</OutboundLink></li>
                    <li><OutboundLink href="https://www.amazon.com/D-S-Chapman/e/B07SJQ89R1/">Amazon Author Page</OutboundLink></li>
                    <li><Link to="/canon">Personal Canon</Link></li>
                </ul>
                <div css={css`display:flex; justify-content:center;`}>
                    <EmailForm />
                </div>
                
        </Layout>
    )     
}

export default About
