/** @jsx jsx */
import React from 'react'
import PostLink from './posts/post-link'
import { Styled, jsx } from 'theme-ui'

function Search({ data }) {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [tagsVisible, setTagsVisible] = React.useState(false)
  let allTags = new Object()
  data.allMdx.edges.map(({ node }) => {
    node.frontmatter.tags.map((tag) => {
      allTags[tag] = (allTags[tag] || 0) + 1
    })
  })

  // get the objects into an array of arrays, the second value in the sub array is the count
  let tags = Object.entries(allTags)
  let distilledTags = []
  tags.map((tag) => {
    if (tag[1] > 1) {
      distilledTags.push(tag[0])
    }
  })

  function handleChange(event) {
    setSearchTerm(event.target.value)
  }

  //right now let's display the tags when you click in
  function handleFocus() {
    setTagsVisible(true)
  }

  return (
    <div className="search">
      <div>
        {tagsVisible ? (
          <div>
            <h4 sx={{ margin: 0 }}>Tags</h4>
            <ul sx={{ listStyle: 'none', display: 'inline', padding: 0 }}>
              {distilledTags.map((tag) => {
                return (
                  <li
                    sx={{ display: 'inline', paddingRight: '1rem' }}
                    key={tag}>
                    {tag}
                  </li>
                )
              })}
            </ul>
          </div>
        ) : (
          ''
        )}

        <input
          onChange={handleChange}
          value={searchTerm}
          onFocus={handleFocus}
        />
      </div>
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
          if (
            newPost.tags.find((str) => str.match(`${searchTerm}`, 'i')) ||
            newPost.title.match(`${searchTerm}`, 'i')
          ) {
            return <PostLink key={newPost.slug} {...newPost} />
          } else return
        })}
      </Styled.ul>
    </div>
  )
}

export default Search
