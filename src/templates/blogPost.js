import React from 'react'
import {graphql, Link} from 'gatsby'
import { Parallax, ParallaxLayer } from 'react-spring'
import Layout from '../components/Layout'

const Template = ({data, pageContext}) => {
    const {next, prev} = pageContext
    const {markdownRemark} = data
    const title = markdownRemark.frontmatter.title
    const html = markdownRemark.html
    return (
        <Layout>
        <Parallax pages={2}>
            <ParallaxLayer offset={0} speed={.5}>
                <h2>{title}</h2>
                <div className='blogpost'
                    dangerouslySetInnerHTML={{__html: html}}
                />
                <div>
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
            </ParallaxLayer>
        </Parallax>
        </Layout>
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