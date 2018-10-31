import React from "react"
import {Link } from 'gatsby'
import Layout from '../components/Layout'
import {Parallax, ParallaxLayer} from 'react-spring'

const singleTagsTemplate = ({data, pageContext}) => {
    const { posts, tagName} = pageContext
    return (
        <Layout>
        <Parallax pages={1}> 
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
        </Layout>
    )
}
export default singleTagsTemplate