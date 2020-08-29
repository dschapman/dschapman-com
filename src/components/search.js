/** @jsx jsx */
import React from 'react'
import PostLink from './posts/post-link'
import { Styled, jsx } from 'theme-ui'

function Search({ data }) {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [tagsVisible, setTagsVisible] = React.useState(false)
  let allTags = {}
  data.allMdx.edges.map(({ node }) => {
    node.frontmatter.tags.map((tag) => {
      allTags[tag] = (allTags[tag] || 0) + 1
    })
  })

  function handleChange(event) {
    setSearchTerm(event.target.value)
  }

  function handleFocus() {
    setTagsVisible(!tagsVisible)
  }

  return (
    <div className="search">
      <div>{tagsVisible ? 'visible' : ''}</div>
      <input
        onChange={handleChange}
        value={searchTerm}
        onFocus={handleFocus}
        onBlur={handleFocus}
      />
      <Styled.ul
        sx={{
          variant: 'styles.postlist',
        }}>
        {data.allMdx.edges.map(({ node: post }) => {
          let newPost = {
            slug: post.frontmatter.slug,
            title: post.frontmatter.title,
            body: post.body,
            tags: post.frontmatter.tags,
          }
          console.log(newPost.tags.find((str) => str === searchTerm))
          if (newPost.tags.find((str) => str === searchTerm)) {
            return <PostLink key={newPost.slug} {...newPost} />
          } else return
        })}
      </Styled.ul>
    </div>
  )
}

export default Search
