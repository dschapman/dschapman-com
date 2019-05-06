import React from 'react'
import Header from './Header'
import {MDXProvider} from "@mdx-js/tag"
import {Body,Content,H2,Poem,Stanza} from './StyledComponents'


const Template = ({ children, pageContext}) => {
    const {frontmatter} = pageContext
    return( 
    <MDXProvider>
        <Body>
            <Header title={`${frontmatter.title} - D.S. Chapman`} description={frontmatter.description} image={frontmatter.image} path={frontmatter.path}/>
            <Content>
            <H2>{frontmatter.title}</H2>
            <div>{children}</div>
            
            </Content>
        </Body>
    </MDXProvider>

    )
}

export default Template