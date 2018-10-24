import React from "react"
import { graphql, Link } from 'gatsby'
import Header from '../components/Header'

const allTagsTemplate = ({data, pageContext}) => {
    const {tags} = pageContext
    return (
        <div style={{fontFamily: 'avenir'}}>
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
        </div>
    )
}
export default allTagsTemplate