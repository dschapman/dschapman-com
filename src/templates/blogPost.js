import React from 'react'
import {graphql, Link} from 'gatsby'
import Header from '../components/Header'

const Template = ({data, pageContext}) => {
    const {next, prev} = pageContext
    const {markdownRemark} = data
    const title = markdownRemark.frontmatter.title
    const html = markdownRemark.html
    return (
        <div>
            <Header />
            <h2>{title}</h2>
            <div className='blogpost'
                dangerouslySetInnerHTML={{__html: html}}
            />
            <div style={{marginBottom: 'lrem'}}>
                {next && 
                    <Link to={next.frontmatter.path}>
                        Next
                    </Link>
                }
            </div>
            <div>
                {prev && 
                    <Link to={prev.frontmatter.path}>
                        Prev
                    </Link>
                }
            </div>
        </div>
    )
}

export const query = graphql`
    query($pathSlug: String!) {
        markdownRemark(frontmatter: { path: {eq: $pathSlug}}) {
            html
            frontmatter {
                title
            }
        }
    }
`

export default Template