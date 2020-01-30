import React from "react"
import {Link } from 'gatsby'
import Header from '../components/Header'
import {H2, Content, Body} from '../components/StyledComponents'
import {Social} from "../components/social"

const singleTagsTemplate = ({data, pageContext}) => {
    const { posts, tagName} = pageContext
    console.log(posts)
    return (
    <Body>
    <Header title={`Articles About ${tagName} - D.S. Chapman`} path={`/articles/tags/${tagName}`} />
    <Content>
            <H2>
                Articles about { `${tagName}`}
            </H2>
            <div>
                <ul>
                    {posts.map((post, index) => {
                        return ( 
                            <div key={index}>
                                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                            </div>
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