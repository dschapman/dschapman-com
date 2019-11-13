/** @jsx jsx */
import React from 'react'
import Header from './Header'
import {Link} from 'gatsby'
import {MDXRenderer} from 'gatsby-mdx/mdx-renderer'
import {Body,Content,H1,Poem,Stanza} from './StyledComponents'
import EmailForm from './EmailForm'
import {Social} from './social'
import {jsx,css} from "@emotion/core"


const Template = ({ children, pageContext}) => {
    const {frontmatter} = pageContext
    return( 
        <Body>
            <Header title={`${frontmatter.title} - D.S. Chapman`} description={frontmatter.description} image={frontmatter.image} path={frontmatter.path}/>
            <Content>
            <H1>{frontmatter.title}</H1>
            <div>{children}</div>
            <div css={css(`text-align:center; font-style:italic;padding-bottom: 2rem; padding-top:1rem; font-size:1.1rem;`)}>More articles about <Link to={`/articles/tags/${frontmatter.tags[0]}`}>{frontmatter.tags[0]}</Link></div>
            <div css={css(`display:flex; justify-content:center;`)}>
                <EmailForm />
            </div>
            <Social/>
            </Content>
        </Body>

    )
}

export default Template