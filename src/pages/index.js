import React from "react"
import Header from '../components/Header'
import {Link,graphql} from 'gatsby'
import {Body,Content, H2} from '../styles/StyledComponents'
import styled from 'react-emotion'

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
                            <Link to={post.path}><H2>
                                {post.title}
                            </H2></Link>
                            <div className="excerpt">{post.excerpt} <Link to={post.path}>(read more...)</Link></div>
                            <PostFooter>
                            
                            <Tags>{tags.map((tagName, index) => {
                                    return (
                                        <Tag key={index}>
                                            <Link to={`tags/${tagName}`}>
                                                {tagName}
                                            </Link>
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
            sort: {order: DESC, fields: [frontmatter___date]}
        ) {
            edges {
                node {
                    frontmatter {
                        path
                        date
                        title
                        tags
                        excerpt
                    }
                }
            }
        }
    }
`

export default MainPage