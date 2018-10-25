import React from "react"
import { StaticQuery, graphql, Link } from 'gatsby'

const TitleAndDescription = ({data}) => {
    const title = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',              
        }}>
            <h1 style={{marginBottom:0}}>{title}</h1>
            <p style={{
                marginTop:0,
                opacity: 0.5,
            }}>{description}</p>
        </div>
    )
}

const BlogLinks = ({data}) => {
    const { edges } = data.allMarkdownRemark
    return (
        <div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            {edges.map(edge => {
              const {frontmatter} = edge.node
              return (
                <div
                  key={frontmatter.path}
                  style={{marginBottom: '1rem'}}
                >
                  <Link to={frontmatter.path}>
                    {frontmatter.title}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
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
            <BlogLinks data={data} />
            </div>
        }
            />
    )
}

export default Header