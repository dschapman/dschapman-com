import React from "react"
import { StaticQuery, graphql, Link } from 'gatsby'
import GatsbyDropdown from './GatsbyDropdown.js'

const TitleAndDescription = ({data}) => {
    const title = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',              
        }}>
            <h1 style={{marginBottom:0}}><Link to='/'>{title}</Link></h1>
            <p style={{
                marginTop:0,
                opacity: 0.5,
            }}>{description}</p>
        </div>
    )
}

const BlogLinks = ({data}) => {
    const { edges } = data.allMarkdownRemark
    var blogLinks = []
    for (var i = 0; i < edges.length; i++) {
        blogLinks.push({"linkName":edges[i].node.frontmatter.title, "linkPath":edges[i].node.frontmatter.path})
    }
    return (
        blogLinks
      )
}

const Header = () => {
    return (
        <StaticQuery
            query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
                allMarkdownRemark(
                    sort: {
                        order: DESC,
                        fields: [frontmatter___date],
                    }
                ) {
                 edges {
                   node {
                     frontmatter{
                      title
                      path
                      date
                    }
                   }
                }
            }
        }
            `}
            render={data =>
            <div>
            <TitleAndDescription data={data} />
            <GatsbyDropdown dropdownName={"Blog"} dropdownLinks={BlogLinks({data})} />
            </div>
        }
            />
    )
}

export default Header