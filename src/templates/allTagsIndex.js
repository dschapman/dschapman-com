import React from "react"
import { Link } from 'gatsby'
import Header from '../components/Header'
import { Parallax, ParallaxLayer } from "react-spring";
import {Body} from "../styles/StyledComponents"

const allTagsTemplate = ({data, pageContext}) => {
    const {tags} = pageContext
    return (
        <div>
        <Header />
        <Body>
            
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
        </Body>
        </div>
    )
}
export default allTagsTemplate