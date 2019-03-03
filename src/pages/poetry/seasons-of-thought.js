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
                        <p>Seasons of Thought is a collection of poems that traces its themes through the seasons of the year. Check out a few of the poems below and make sure to subscribe to the email list for more information when it releases on Amazon in June.</p>
                    </div>
                    <EmailForm css={css(``)} color="blue"/>
                </div>
                <H2 className={css(tw`xs:text-center text-3xl`)}>Winter</H2>
                <Poem title="The Hearth" bg="#e6e8ff" align="center"> 
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
                <H2 className={css(tw`xs:text-center text-3xl`)}>Spring</H2>
                <Poem title="Bird Song" bg="#e8fffe" align="left"> 
                    The evening sky resounds with grace<br/>
                    &emsp;the echoing fullness of a closing day,<br/>
                    &emsp;which on inspection was the same<br/>
                    &emsp;amalgamation of dissonant chords<br/>
                    &emsp;and harsh wasting words as always.<br/>
                    Yet the song birds still chant up their praise<br/>
                    &emsp;which rises till it resonates<br/>
                    &emsp;sending the shivers of their song in colors<br/>
                    &emsp;humming at the frequency of joy,<br/>
                    despite anything I try to say to the contrary.
                </Poem>
                <H2 className={css(tw`xs:text-center text-3xl`)}>Summer</H2>
                <Poem title="Berry Picking" bg="#eff8ff" align="left"> 
                    How do you choose your favorite color?<br/>
                    <br/>
                    "If you swing a bucket fast enough<br/>
                    no berries will drop out."<br/>
                    &emsp;<i>Look for the flash of blue</i><br/>
                    &emsp;<i>falling to the earth from the silver ship</i><br/>
                    <br/>
                    I did, but I saw only the blue sky,<br/>
                    the twinkle in two blue eyes<br/>
                    and only after I stretched and jumped<br/>
                    peering into the ship<br/>
                    did I see the crew of berries -<br/>
                    blue and calm as a mountain lake,<br/>
                    fresh and sweeter than water.
                </Poem>
                <H2 className={css(tw`xs:text-center text-3xl`)}>Autumn</H2>
                <Poem title="Sunset" bg="#fff5eb" align="left"> 
                Drained, dropping, the screen is fading,<br/>
                music ending, bar is closing.<br/>
                Final curtain call is coming.<br/>
                Light is waning. Light is waning.<br/>
                <br/>
                Water falling without purpose<br/>
                sometimes frozen, sometimes sodden,<br/>
                freezing one day, hot the other.<br/>
                Drums keep playing. Light is waning.<br/>
                <br/>
                Words continue through the darkness<br/>
                movie kisses, backstage lovers<br/>
                silence in the writer’s workshop<br/>
                save a tapping through the shadow.<br/>
                <br/>
                Light is fading over ocean<br/>
                as one lover leaves the gangplank.<br/>
                Ship is casting off at nightfall.<br/>
                Love is constant. (Is it waning?)<br/>
                <br/>
                Love is constant, through the waning<br/>
                though its form is always changing,<br/>
                shining though the curtain closes<br/>
                even when it never opens.<br/>
                <br/>
                Drain a life to dregs of sadness<br/>
                it will echo to a rhythm.<br/>
                Feet are tapping, lips are thrumming<br/>
                even while the light is waning.
                </Poem>
            </Content>
        </Body>
    )     
}

export default Layout
