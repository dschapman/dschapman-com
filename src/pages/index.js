/** @jsx jsx */
import React, { useState } from "react"
import Header from '../components/Header'
import {graphql, Link} from 'gatsby'
import {Body,Content, H2, H3} from '../components/StyledComponents'
import styled from '@emotion/styled'
import {jsx,css} from '@emotion/core'
import {mainTheme} from '../styles/styles'



const DisplayToggle = (props) => {
    const {allMdx} = props.data
    const posts = allMdx.edges
    const Button = styled('button')`
    background: ${mainTheme.background};
    outline: none;
    border: none;
    
    margin-top: 1rem;
    padding:0;
    
    
    `
    const [display,setDisplay]=useState(true);
    function toggle(){
        display ? setDisplay(false) : setDisplay(true);
    }
    return(
    <div className='DisplayToggle'><Button css={css`
        &:hover{text-decoration: overline underline;};
        text-decoration:${display ? `underline` : `overline`};`
    } onClick={toggle}>{props.children}</Button>
    {posts.map(({node}, index) => {
                const post = node.frontmatter
                const tags = node.frontmatter.tags
                const type = node.frontmatter.type
                    return (
                        <Post css={css`display:${display ? `flex` : `none`};`} key={index}>
                            <H3><Link to={post.path}>
                                {post.title}
                            </Link></H3>
                            <div className="excerpt">{post.excerpt} <Link to={post.path}>(read more...)</Link></div>
                            <PostFooter>
                            
                            <Tags>{tags.map((tagName, index) => {
                                if(type == "blog"){
                                    return (
                                        <Tag key={index}>
                                            <Link to={`/blog/tags/${tagName}`}>
                                                {tagName}
                                            </Link>
                                        </Tag>
                                    )}
                                    else {
                                        return (<div key={index}/>)
                                    }
                                    })}
                            </Tags>
                            <Date>{post.date}</Date>
                            </PostFooter>
                        </Post>
                    )
                })}
    </div>)
} 

const Post = styled('div')(
    tw`pt-0 flex flex-col`
)

const PostFooter = styled('div')(
    tw`pt-4 flex justify-between`
)

const Tags = styled('div')(
    tw`flex`
)

const Tag = styled('div')(
    tw`pr-2 text-xs`
)

const Date = styled('div')(
    tw`text-sm`
)

const MainPage = ({data}) => {
    
    return (
        <Body>
        <Header title="Home - D.S. Chapman - Poetry, Blog, Guides" />
            <Content>
            <DisplayToggle data={data}><H2 css={css`margin-bottom: 0; padding:0;`}>Recent Blog Posts</H2></DisplayToggle>
            
            </Content>
        </Body>
    )     
}

export const query = graphql`
    query{
        allMdx (
            limit: 10,
            sort: {order: DESC, fields: [frontmatter___date]},
            filter: {frontmatter: {published:{eq: true}, type:{eq:"blog"}}}
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
                        type
                    }
                }
            }
        }
    }
`

export default MainPage
