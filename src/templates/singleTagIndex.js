import React from "react"
import {Link } from 'gatsby'
import Header from '../components/Header'
import {H2, Content, Body} from '../components/StyledComponents'
import {Social} from "../components/social/social"

const singleTagsTemplate = ({data, pageContext}) => {
    const { posts, tagName} = pageContext
    return (
    <Body>
    <Header title={`Posts About ${tagName} - D.S. Chapman`} path={`/blog/posts/${tagName}`} />
    <Content>
            <H2>
                Posts about { `${tagName}`}
            </H2>
            <div>
                <ul>
                    {posts.map((post, index) => {
                        return ( 
                            <li key={index}>
                                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link> &mdash; {post.frontmatter.description}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <Social/>
        </Content>
        </Body>
    )
}
export default singleTagsTemplate