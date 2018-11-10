import React from "react"
import {Link } from 'gatsby'
import Header from '../components/Header'
import {Body} from '../styles/StyledComponents'

const singleTagsTemplate = ({data, pageContext}) => {
    const { posts, tagName} = pageContext
    return (
    <div>
    <Header />
    <Body>
        
            <div>
                Posts about { `${tagName}`}
            </div>
            <div>
                <ul>
                    {posts.map((post, index) => {
                        return ( 
                            <li key={index}>
                                <Link to={post.frontmatter.path}>
                                    {post.frontmatter.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Body>
        </div>
    )
}
export default singleTagsTemplate