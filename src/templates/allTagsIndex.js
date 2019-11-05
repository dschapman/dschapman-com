import React from "react"
import { Link } from 'gatsby'
import Header from '../components/Header'
import {H2, Content, Body} from "../components/StyledComponents"
import {Social} from "../components/social"

const allTagsTemplate = ({data, pageContext}) => {
    const {tags} = pageContext
    return (
        <Body>
        <Header title="All Articles by Tag - D.S. Chapman" path="/articles/tags" />
        <Content>
            
            <H2>
                Find Articles About
            </H2>
            <div>
                {tags.map((tagName, index) => {
                    return (
                        <div key={index}>
                            <Link to={`articles/tags/${tagName}`}>{tagName}</Link> 
                        </div>
                    )
                })}
            </div>
            <Social/>
        </Content>
        </Body>
    )
}
export default allTagsTemplate