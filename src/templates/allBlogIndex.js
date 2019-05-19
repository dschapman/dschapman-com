import React from "react"
import {Link } from 'gatsby'
import Header from '../components/Header'
import {H2, Content, Body} from '../components/StyledComponents'
import {Social} from "../components/social/social"

const allBlogTemplate = ({data, pageContext}) => {

    const {allPosts, titles} = pageContext

    return (
    <Body>
    <Header title={`All Blog Posts - D.S. Chapman`} path={`/blog`} />
    <Content>
            <H2>
                Blog Posts
            </H2>
            <div>
                <ul>
                    {titles.map((title, index) => {
                        return ( 
                            <div key={index}>
                                <Link to={allPosts[title].frontmatter.path}>{allPosts[title].frontmatter.title}</Link> &mdash; {allPosts[title].frontmatter.description}
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
export default allBlogTemplate