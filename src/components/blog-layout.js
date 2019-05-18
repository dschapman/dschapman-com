/** @jsx jsx */
import React from 'react'
import Header from './Header'
import {MDXRenderer} from 'gatsby-mdx/mdx-renderer'
import {Body,Content,H2,Poem,Stanza} from './StyledComponents'
import EmailForm from './EmailForm'
import {Social} from './social/social'
import {jsx,css} from "@emotion/core"


const Template = ({ children, pageContext}) => {
    const {frontmatter} = pageContext
    return( 
        <Body>
            <Header title={`${frontmatter.title} - D.S. Chapman`} description={frontmatter.description} image={frontmatter.image} path={frontmatter.path}/>
            <Content>
            <H2>{frontmatter.title}</H2>
            <div>{children}</div>
            <div css={css(`display:flex; justify-content:center;`)}>
                <EmailForm />
            </div>
            <Social/>
            </Content>
        </Body>

    )
}

export default Template