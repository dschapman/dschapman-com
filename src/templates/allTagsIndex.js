import React from "react"
import { Link } from 'gatsby'
import Header from '../components/Header'
import { Parallax, ParallaxLayer } from "react-spring";

const allTagsTemplate = ({data, pageContext}) => {
    const {tags} = pageContext
    return (
        <div>
            <Parallax pages={1}>
            <ParallaxLayer offset={0} speed={.5}>
            <Header />
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
        </div>
    )
}
export default allTagsTemplate