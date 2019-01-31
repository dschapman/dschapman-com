import React from "react"
import Header from '../components/Header'
import {graphql} from 'gatsby'
import {Body,Content, H2} from '../styles/StyledComponents'
import {S_Link} from '../components/GatsbyComponents'
import styled from 'react-emotion'
import {css} from 'react-emotion'

const Post = styled.div(
    tw`pt-4 flex flex-col`
)

const PostFooter = styled.div(
    tw`pt-4 flex justify-between`
)

const Tags = styled.div(
    tw`flex`
)

const Tag = styled.div(
    tw`pr-2 text-xs`
)

const Date = styled.div(
    tw`text-sm`
)

const MainPage = ({data}) => {
    const {allMdx} = data
    const posts = allMdx.edges
    
    return (
        <Body>
        <Header />

            <Content>
            {posts.map(({node}, index) => {
                const post = node.frontmatter
                const tags = node.frontmatter.tags
                    return (
                        <Post key={index}>
                            <S_Link to={post.path} className={css(tw`hover:no-underline`)}><H2>
                                {post.title}
                            </H2></S_Link>
                            <div className="excerpt">{post.excerpt} <S_Link to={post.path}>(read more...)</S_Link></div>
                            <PostFooter>
                            
                            <Tags>{tags.map((tagName, index) => {
                                    return (
                                        <Tag key={index}>
                                            <S_Link to={`/blog/tags/${tagName}`}>
                                                {tagName}
                                            </S_Link>
                                        </Tag>
                                    )
                                    })}
                            </Tags>
                            <Date>{post.date}</Date>
                            </PostFooter>
                        </Post>
                    )
                })}
            </Content>
        </Body>
    )     
}

export const query = graphql`
    query{
        allMdx (
            limit: 10,
            sort: {order: DESC, fields: [frontmatter___date]},
            filter: {frontmatter: {published:{eq: true}, type: {eq: "blog"}}}
        ) {
            edges {
                node {
                    frontmatter {
                        path
                        date
                        title
                        tags
                        excerpt
                        published
                    }
                }
            }
        }
    }
`

export default MainPage