import React from "react"
import { StaticQuery, graphql, Link } from 'gatsby'
import {GatsbyDropdown, GatsbyButton} from './GatsbyComponents.js'
import styled from "react-emotion";
import {H1} from "../styles/StyledComponents"

const NavBar = ({data}) => {

    const Navbar = styled.div(
        tw`flex flex-wrap justify-center bg-white border-solid border-t-0 border-r-0 border-l-0 border-b-1 border-blue-lighter `,
        props => ({
            color: props.color,
        })
    )
    return (
        <Navbar>
            <GatsbyButton buttonName={"Home"} buttonLink={'/'} />
            <GatsbyButton buttonName={"About"} buttonLink={'/about'} />
            <GatsbyDropdown dropdownName={"Blog"} dropdownLinks={BlogLinks({data})} />
        </Navbar>
    )
}

const TitleAndDescription = ({data}) => {
    const title = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description
    
    const Title = styled.div(
        tw`flex flex-col items-center justify-center`
    )

    return (
        
        <Title>
            <H1>{title}</H1>
            <p style={{
                marginTop:0,
                opacity: 0.5,
            }} onScroll>{description}</p>
        </Title>
    )
}

const BlogLinks = ({data}) => {
    const { edges } = data.allMarkdownRemark
    var blogLinks = []
    for (var i = 0; i < edges.length && i < 3; i++) {
        blogLinks.push({"linkName":edges[i].node.frontmatter.title, "linkPath":edges[i].node.frontmatter.path})
    }
    blogLinks.push({"linkName":"All Posts by Tag","linkPath":"/tags"})
    return (
        blogLinks
      )
}

const Header = () => {
    const Head = styled.div(
        tw`pinned`
    )

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
            <Head>
            <TitleAndDescription data={data} />
            <NavBar data={data}/>
            </Head>
        }
            />
    )
}

export default Header