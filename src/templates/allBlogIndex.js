import React from "react"
import {Link } from 'gatsby'
import Header from '../components/Header'
import {H2, Content, Body} from '../components/StyledComponents'
import {Social} from "../components/social"

const allBlogTemplate = ({data, pageContext}) => {

    const {allPosts, titles} = pageContext

    return (
    <Body>
    <Header title={`All Articles - D.S. Chapman`} path={`/articles`} />
    <Content>
            <H2>
                Articles
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