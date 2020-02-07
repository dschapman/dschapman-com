/** @jsx jsx */
import React, { useState } from "react"
import Header from '../components/Header'
import {graphql, Link} from 'gatsby'
import {Body,Content, H1, H3} from '../components/StyledComponents'
import styled from '@emotion/styled'
import {jsx,css} from '@emotion/core'
import {mainTheme} from '../components/styles'
import {Social} from '../components/social'
import Avatar from '../components/Avatar'
import banner from '../images/SoT-Banner.png'



const GetContent = (props) => {

    const posts = props.data.edges

    return(
        <div className='ToggleContent'>{posts.map(({node}, index) => {
            const post = node
            const tags = node.frontmatter.tags
            const type = node.frontmatter.type
                return (
                    <Post key={index}>
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

const MainPage = ({data}) => {
    
    return (
        <Body>
        <Header title="Home - D.S. Chapman - Poetry, Blog, Guides" />
            <Content>
            <div css={css`padding-top:1rem;padding-bottom:.5rem;`}>Website of <Link to="/about/">D.S. Chapman</Link> - writer and poet. Articles on poetry, writing, and technology.</div>
            <H1 css={css`padding:0;margin-bottom:-.5rem;margin-top:0;`}>Articles</H1>
            <GetContent data={data.recentArticles} />
            <Social/>
            </Content>
        </Body>
    )     
}

export const query = graphql`
    query getContent {
        recentArticles: allMdx (
            limit: 10,
            sort: {order: DESC, fields: [frontmatter___date]},
            filter: {frontmatter: {published:{eq: true}}}
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
                    }
                    timeToRead
                }
            }
        }
        
    }
    
`

export default MainPage
