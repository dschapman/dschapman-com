import React from "react"
import { Link } from 'gatsby'
import Header from '../components/Header'
import {H2, Content, Body} from "../styles/StyledComponents"

const allTagsTemplate = ({data, pageContext}) => {
    const {tags} = pageContext
    return (
        <Body>
        <Header />
        <Content>
            
            <H2>
                Tags
            </H2>
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
        </Content>
        </Body>
    )
}
export default allTagsTemplate