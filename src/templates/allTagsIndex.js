import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import { Parallax, ParallaxLayer } from "react-spring";

const allTagsTemplate = ({data, pageContext}) => {
    const {tags} = pageContext
    return (
        <Layout >
            <Parallax pages={1}>
            <ParallaxLayer offset={0} speed={.5}>
            <div>
                Tags
            </div>
            <div>
                {tags.map((tagName, index) => {
                    return (
                        <li key={index}>
                            <Link to={`tags/${tagName}`}>
                                {tagName}
                            </Link>
                        </li>
                    )
                })}
            </div>
            </ParallaxLayer>
            </Parallax>
        </Layout>
    )
}
export default allTagsTemplate