/** @jsx jsx */
import React, { useState } from "react"
import Header from '../components/Header'
import {graphql, Link} from 'gatsby'
import {Body,Content, H2, H3} from '../components/StyledComponents'
import styled from '@emotion/styled'
import {jsx,css} from '@emotion/core'
import {mainTheme} from '../components/styles'
import {Social} from '../components/social'
import Avatar from '../components/Avatar'
import banner from '../images/SoT-Banner.png'


const DisplayToggle = (props) => {
    const Button = styled('button')`
    background: ${mainTheme.background};
    outline: none;
    border: none;
    margin-top: 1rem;
    padding:0;
    justify-content: center;
    `
    const [display,setDisplay]=useState(props.display);

    function toggle(){
        display ? setDisplay(false) : setDisplay(true);
    }
    return(
    <div css={css`display:flex; flex-direction: column;`}><Button css={css`
        &:hover{text-decoration-line: underline overline; text-decoration-color:${display ? `${mainTheme.primaryDarkest}` : `${mainTheme.primaryDark}`};};
        text-decoration-line:${display ? `underline`:`overline`}; text-decoration-color:${display ? `${mainTheme.primaryDarkest}` : `${mainTheme.primaryDark}`};`
    } onClick={toggle}><H2 css={css`margin-bottom: 0; padding:0; color: ${display ? `${mainTheme.primaryDarkest}`:`${mainTheme.primaryDark}`};`}>{props.children}</H2></Button>
    <GetContent data={props.data} display={display}/>
    </div>)
}

const GetContent = (props) => {

    const posts = props.data.edges

    const display = props.display
    return(
        <div className='ToggleContent'>{posts.map(({node}, index) => {
            const post = node
            const tags = node.frontmatter.tags
            const type = node.frontmatter.type
                return (
                    <Post css={css`display:${display ? `flex` : `none`};`} key={index}>
                        <H3 css={css`margin-bottom:0;`}><Link css={css`color: ${mainTheme.primaryDark};`} to={post.frontmatter.path}>
                            {post.frontmatter.title}
                        </Link></H3>
                        <Date>{post.frontmatter.date} - {post.timeToRead} minute read</Date>
                        <div className="description">{post.frontmatter.description}</div>
                        <PostFooter>
                        </PostFooter>
                    </Post>
                )
            })}</div>
    )
}

const Post = styled('div')(
    `
    padding-top: 0;
    display: flex;
    flex-direction: column; 
    `
)

const PostFooter = styled('div')(
    `
    padding-top: .25rem;
    display: flex;
    justify-content: space-between;
    `
)

const Tags = styled('div')(
    `
    display:flex;
   

    `
)

const Tag = styled('div')(
    `
    margin-right: .5rem;
    font-size: .75rem;
    `
)

const Date = styled('div')(
    `
    font-size: .75rem;
    `
)

const Articles = ({data}) => {
    
    return (
        <Body>
        <Header title="Articles - D.S. Chapman - Poetry, Blog, Guides" />
            <Content>
            <DisplayToggle data={data.poetryArticles} display={true}>Posts about Poetry</DisplayToggle>
            <DisplayToggle data={data.writingArticles} display={false}>Posts about Writing</DisplayToggle>
            <Social/>
            </Content>
        </Body>
    )     
}

export const query = graphql`
    query getContentAndGetContent {
        
        poetryArticles: allMdx (
            sort: {order: ASC, fields: [frontmatter___title]},
            filter: {frontmatter: {published:{eq: true}, tags:{eq:"poetry"}}}
        ) {
            edges {
                node {
                    frontmatter {
                        path
                        date
                        title
                        tags
                        excerpt
                        description
                        published
                        type
                    }
                    timeToRead
                }
            }
        }
        writingArticles: allMdx (
            sort: {order: ASC, fields: [frontmatter___title]},
            filter: {frontmatter: {published:{eq: true}, tags:{eq:"writing"}}}
        ) {
            edges {
                node {
                    frontmatter {
                        path
                        date
                        title
                        tags
                        excerpt
                        published
                        description
                    }
                    timeToRead
                }
            }
        }
    }
    
`

export default Articles
