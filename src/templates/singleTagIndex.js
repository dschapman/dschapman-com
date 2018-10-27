import React from "react"
import {Link } from 'gatsby'
import Header from '../components/Header'
import {Parallax, ParallaxLayer} from 'react-spring'

const singleTagsTemplate = ({data, pageContext}) => {
    const { posts, tagName} = pageContext
    return (
        <div>
        <Parallax pages={1}> 
        <Header />
        <ParallaxLayer offset={0} speed={.5}>
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
            </ParallaxLayer>
        </Parallax>
        </div>
    )
}
export default singleTagsTemplate