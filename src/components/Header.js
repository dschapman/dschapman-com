import React, {Component} from "react"
import { StaticQuery, graphql, Link } from 'gatsby'
import {GatsbyDropdown, GatsbyButton, S_Link} from './GatsbyComponents.js'
import styled from "react-emotion"
import {css} from "react-emotion"
import {H1} from "../styles/StyledComponents"
import Headroom from 'react-headroom'
import Helmet from 'react-helmet'
import SEO from './SEO'


const NavBar = ({data}) => {
    const Navbar = styled.div(
        tw`min-w-full flex flex-wrap justify-center bg-white border-solid border-t-0 border-r-0 border-l-0 border-b border-blue relative `,
        props => ({
            color: props.color,
        })
    )
    return (
        <Navbar>
            <GatsbyButton buttonName={"About"} buttonLink={'/about'} />
            <GatsbyDropdown dropdownName={"Poetry"} dropdownLinks={[{"linkName":"Seasons of Thought","linkPath":"/poetry/seasons-of-thought"}]} />
            <GatsbyDropdown dropdownName={"Guides"} dropdownLinks={BlogLinks({data})} />
            <GatsbyDropdown dropdownName={"Blog"} dropdownLinks={BlogLinks({data})} />
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
            <S_Link className={css(tw`text-blue-darkest no-underline hover:no-underline`)} to="/"><H1 className={css(tw`hover:no-underline`)}>{title}</H1></S_Link>
        </Title>
    )
}

const BlogLinks = ({data}) => {
    const { edges } = data.allMdx
    var blogLinks = []
    for (var i = 0; i < edges.length && i < 3; i++) {
        blogLinks.push({"linkName":edges[i].node.frontmatter.title, "linkPath":edges[i].node.frontmatter.path})
    }
    blogLinks.push({"linkName":"All Posts by Tag","linkPath":"/tags"})
    return (
        blogLinks
      )
}

const Header =() => {


    
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
                allMdx(
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
            <SEO/>
            <Headroom>
            
            <TitleAndDescription data={data} />
            <NavBar data={data}/>
            </Headroom>
            </Head>
            
        }
            />
    )
    
}

export default Header
