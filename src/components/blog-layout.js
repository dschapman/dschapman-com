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
    const tags = frontmatter.tags
    return( 
        <Body>
            <Header title={`${frontmatter.title} - D.S. Chapman`} description={frontmatter.description} image={frontmatter.image} path={frontmatter.path}/>
            <Content>
            <H1>{frontmatter.title}</H1>
            <div>{children}</div>
            <div css={css(`text-align:center; font-style:italic;padding-bottom: 2rem; padding-top:1rem; font-size:1.1rem;`)}>More articles about
            {tags.map((tagName, index) => {
                if(index != (tags.length-1))
                    return (
                            <span> <Link key={index} to={`articles/tags/${tagName}`}>{tagName}</Link>,</span>
                    )
                else
                    return (
                        <span> <Link key={index} to={`articles/tags/${tagName}`}>{tagName}</Link></span>
                    )
                })}</div>
            <div css={css(`display:flex; justify-content:center;`)}>
                <EmailForm />
            </div>
            <Social/>
            </Content>
        </Body>

    )
}

export default Template