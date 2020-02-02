/** @jsx jsx */
import React, {Component} from "react"
import { StaticQuery, graphql, Link } from 'gatsby'
import {GatsbyDropdown, GatsbyButton} from './GatsbyComponents.js'
import styled from "@emotion/styled"
import {jsx,css} from "@emotion/core"
import {H1} from "./StyledComponents"
import Headroom from 'react-headroom'
import SEO from './SEO'
import {mainTheme,mq} from './styles'


const NavBar = ({data}) => {
    const Navbar = styled('div')(
        `
        min-width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background: ${mainTheme.background};
        border: solid ${mainTheme.primary};
        border-width: 0 0 1px 0;
        `,
        props => ({
            color: props.color,
        })
    )
    return (
        <Navbar>
            <GatsbyButton buttonName={"About"} buttonLink={'/about/'} />
            <GatsbyButton buttonName={"Poetry"} buttonLink={"/poetry/seasons-of-thought"} />
            <GatsbyButton buttonName={"Articles"} buttonLink={'/articles/'} />
        </Navbar>
        
    )
}

const TitleAndDescription = ({data}) => {
    

    const title = data.site.siteMetadata.title
    const tagline = data.site.siteMetadata.tagline
    

    const Title = styled('div')(
        `
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: ${mainTheme.background};
        `,

    )

    return (
        
        <Title>
            <Link css={css`color: ${mainTheme.primaryDarkest}; &:hover { text-decoration:none;}`} to="/"><H1 css={css`margin-top:2rem;margin-bottom:0.25rem;font-size:2.25rem;text-align:left;`}>{title}</H1></Link>
        </Title>
    )
}

const BlogLinks = ({data}) => {
    var blogLinks = []

    if(data.blogs!=null){
    const { edges } = data.blogs
    
    for (var i = 0; i < edges.length; i++) {
        blogLinks.push({"linkName":edges[i].node.frontmatter.title, "linkPath":edges[i].node.frontmatter.path})
    }}
    blogLinks.push({"linkName":"All Posts by Tag","linkPath":"/articles/tags"})
    return (
        blogLinks
      )
}


const Head = styled('div')`
    background: ${mainTheme.background};
`

class Header extends Component{

    constructor(props){
        super(props);
        this.state={
            title:props.title,
            description:props.description,
            image:props.image,
            path:props.path
        };
    }
    

    render (){
        return(
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
              guides: allMdx(limit:5, sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {published: {eq: true}, type: {eq: "guide"}}}) {
                edges {
                  node {
                    frontmatter {
                      title
                      path
                      date
                      type
                      published
                    }
                  }
                }
              }
              blogs: allMdx(limit: 4, sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {published: {eq: true}}}) {
                edges {
                  node {
                    frontmatter {
                      title
                      path
                      date
                      type
                      published
                    }
                  }
                }
              }
            }

            `}
            render={data =>
            <Head>
            <SEO title={this.state.title} description={this.state.description} image={this.state.image} pathname={this.state.path} />
            <Headroom>
            
            <TitleAndDescription data={data} />
            <NavBar data={data}/>
            </Headroom>
            </Head>
            
        }
            />
        )
    }
    
}

export default Header
