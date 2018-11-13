import React from 'react'
import {graphql} from 'gatsby'
import Header from '../components/Header'
import {H2,Content,Body} from '../styles/StyledComponents'
import {S_Link} from '../components/GatsbyComponents'

const Template = ({data, pageContext}) => {
    const {next, prev} = pageContext
    const {markdownRemark} = data
    const title = markdownRemark.frontmatter.title
    const html = markdownRemark.html
    return (
        <Body>
            <Header/>
            <Content>
                <H2>{title}</H2>
                <div className='blogpost'
                    dangerouslySetInnerHTML={{__html: html}}
                />
                <div>
                    <div>
                        {next && 
                            <S_Link to={next.frontmatter.path}>
                                Next
                            </S_Link>
                        }
                    </div>
                    <div>
                        {prev && 
                            <S_Link to={prev.frontmatter.path}>
                                Prev
                            </S_Link>
                        }
                    </div>
                </div>
                </Content>
        </Body>
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