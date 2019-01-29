import React from "react"
import {H3,H2,P,Content,Body} from '../../styles/StyledComponents'
import Header from 'components/Header'
import EmailForm from '../../components/EmailForm'
import {withPrefix} from "gatsby"
import {css} from "react-emotion"
import Poem from "../../components/Poem"


const Layout = () => {
    return (
        <Body>
        <Header /> 
            <Content>
                <H2 className={css(tw`xs:text-center sm:text-center md:text-center lg:text-left xl:text-left`)}>Seasons of Thought</H2>
                <P>Seasons of Thought is a poetry collection coming 2019 that traces its themes through the seasons of the year. For more information make sure to enter your email below!</P>
                <H2 className={css(tw`xs:text-center text-3xl`)}>Winter</H2>
                <Poem title="The Hearth" bg="#eff8ff" align="center"> 
                    Can words still kiss,<br/>
                    or has the spark fled?<br/>
                    <br/>
                    Do their voices crack, <br/>
                    Bounce like empty shells?<br/>
                    <br/>
                    Or after all this time<br/>
                    can they sit still<br/>
                    <br/>
                    in the same room &mdash;<br/>
                    speaking love <br/>
                    in silence?
                </Poem>
                <div className={css(tw`flex justify-center`)}>
                   <EmailForm className={css(tw`w-full`)}/>
                </div>
            </Content>
        </Body>
    )     
}

export default Layout
