/** @jsx jsx */
import React from "react"
import {H2,H3,Content,Body} from '../../components/StyledComponents'
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
                        <p>Seasons of Thought is a collection of poetry that traces its themes across the changing seasons. The poems in the collection use the passage of time as a canvas to explore nature, family, childhood, faith, and other aspects of the human condition. Seasons of Thought is D.S. Chapman’s first collection of poetry. <a href="https://www.amazon.com/Seasons-Thought-D-S-Chapman/dp/0578504359">Available for purchase from Amazon now!</a></p>
                    </div>
                  


    
                    </div>
                    <H3><a rel="nofollow" href="https://www.goodreads.com/book/show/46134618-seasons-of-thought">Reviews of Seasons of Thought</a></H3>
                    <div css={css(`padding-bottom:56.25%;position:relative; display:block; width:100%;`)}>
                    
                    <iframe css={css(`position:absolute; top:0; left:0;`)} id="the_iframe" src="https://www.goodreads.com/api/reviews_widget_iframe?did=DEVELOPER_ID&format=html&header_text=Reviews+of+Seasons+of+Thought&isbn=9780578504353&links=3490dc&min_rating=1&num_reviews=&review_back=ffffff&stars=000000&stylesheet=&text=22292f" width="100%" height="100%" frameborder="0"></iframe>
                    </div>
                    <Social/>
            </Content>
        </Body>
    )     
}

export default Layout
