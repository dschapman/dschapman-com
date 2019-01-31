import React, {Component} from "react"
import { StaticQuery, graphql, Link } from 'gatsby'
import {GatsbyDropdown, GatsbyButton, S_Link} from './GatsbyComponents.js'
import styled from "react-emotion"
import {css} from "react-emotion"
import {H1} from "../styles/StyledComponents"
import Headroom from 'react-headroom'
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
            <GatsbyDropdown dropdownName={"Guides"} dropdownLinks={GuideLinks({data})} />
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
    var blogLinks = []

    if(data.blogPosts!=null){
    const { edges } = data.blogPosts
    
    for (var i = 0; i < edges.length; i++) {
        blogLinks.push({"linkName":edges[i].node.frontmatter.title, "linkPath":edges[i].node.frontmatter.path})
    }}
    blogLinks.push({"linkName":"All Posts by Tag","linkPath":"/blog/tags"})
    return (
        blogLinks
      )
}

const GuideLinks = ({data}) => {
    var guideLinks = []

    if(data.guidePosts!=null) {
        const { edges } = data.guidePosts
        
        for (var i = 0; i < edges.length; i++) {
            guideLinks.push({"linkName":edges[i].node.frontmatter.title, "linkPath":edges[i].node.frontmatter.path})
        }}
    if(guideLinks == []) {
        guideLinks.push({"linkName":" ", "linkPath":" "})
    }
    //guideLinks.push({"linkName":"All Posts by Tag","linkPath":"/tags"})
    return (
        guideLinks
      )
}

const Head = styled.div(
    tw`bg-white`,
)

class Header extends Component{

    constructor(props){
        super(props);
        this.state={
            title:props.title,
            description:props.description,
            image:props.image
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
                guidePosts: allMdx(limit:5, sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {published: {eq: true}, type: {eq: "guide"}}}) {
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
                blogPosts: allMdx(limit: 4, sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {published: {eq: true}, type: {eq: "blog"}}}) {
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
            <SEO title={this.state.title} description={this.state.description} image={this.state.image} />
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
