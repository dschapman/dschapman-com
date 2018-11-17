import React from 'react'
import Header from './Header'
import {Body,Content,H2} from '../styles/StyledComponents'


const Template = ({ children, pageContext}) => {
    const {frontmatter} = pageContext
    console.log(pageContext)
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