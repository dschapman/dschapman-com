import React, {Component} from "react"
import { StaticQuery, graphql, Link } from 'gatsby'
import {GatsbyDropdown, GatsbyButton} from './GatsbyComponents.js'
import styled from "react-emotion"
import {H1} from "../styles/StyledComponents"
import Headroom from 'react-headroom'
import Helmet from 'react-helmet'


const NavBar = ({data}) => {
    const Navbar = styled.div(
        tw`min-w-full flex flex-wrap justify-center bg-white border-solid border-t-0 border-r-0 border-l-0 border-b border-blue  `,
        props => ({
            color: props.color,
        })
    )
    return (
        <Navbar>
            <GatsbyButton buttonName={"Home"} buttonLink={'/'} />
            <GatsbyButton buttonName={"About"} buttonLink={'/about'} />
            <GatsbyDropdown dropdownName={"Blog"} dropdownLinks={BlogLinks({data})} />
            <div />
        </Navbar>
        
    )
}

const TitleAndDescription = ({data}) => {
    

    const title = data.site.siteMetadata.title
    const tagline = data.site.siteMetadata.tagline
    

    const Title = styled.div(
        tw`flex flex-col items-center justify-center bg-white`
    )

    return (
        
        <Title>
            <H1>{title}</H1>
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

class Header extends Component {


    render(){
    const Head = styled.div(
            tw`bg-white`,
    )
    return (
        <StaticQuery
            query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                        tagline
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
            <Helmet 
                title={data.site.siteMetadata.title}
                meta ={[ 
                    {name:"tagline", content:data.site.siteMetadata.tagline},
                    {name:"description", content:data.site.siteMetadata.description}
                
                ]}
            />
            
            <TitleAndDescription data={data} />
            <NavBar data={data}/>

            </Head>
        }
            />
    )
    }
}

export default Header