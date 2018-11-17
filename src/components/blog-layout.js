import React from 'react'
import Header from './Header'
import {Body,Content,H2} from '../styles/StyledComponents'
import {S_Link} from './GatsbyComponents'


const Template = ({ children, pageContext}, {data}) => {
    const {frontmatter} = pageContext
    console.log(data)
    return( 
    <div>
        <Body>
            <Header />
            <Content>
            <H2>{frontmatter.title}</H2>
            <div>{children}</div>
            
            </Content>
        </Body>
    </div>

    )
}

export default Template