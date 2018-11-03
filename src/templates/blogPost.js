import React from 'react'
import {graphql, Link} from 'gatsby'
import { Parallax, ParallaxLayer } from 'react-spring'
import Header from '../components/Header'
import {H2} from '../styles/StyledComponents'

const Template = ({data, pageContext}) => {
    const {next, prev} = pageContext
    const {markdownRemark} = data
    const title = markdownRemark.frontmatter.title
    const html = markdownRemark.html
    return (
        <div>
        <Parallax pages={2}>
            <ParallaxLayer offset={0} speed={.5}>
            <Header />
                <H2>{title}</H2>
                <div className='blogpost'
                    dangerouslySetInnerHTML={{__html: html}}
                />
                <div>
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
                </div>
            </ParallaxLayer>
        </Parallax>
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