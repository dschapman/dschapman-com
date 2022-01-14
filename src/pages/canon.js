/** @jsx jsx */
import { React, useState } from 'react'

import styled from '@emotion/styled'
import { jsx, css } from '@emotion/react'
import data from '../content/canon.yml'
import Layout from '../components/layout/layout.js'
import colors from '../lib/colors'
import { bpMaxSM, bpMaxLG } from '../lib/breakpoints'

function Canon(props) {
  const Container = styled.div(
    `
        display:flex;
        flex-wrap: wrap;
        justify-content: space-around;
        `
  )
  console.log(data)
  const [sort, setSort] = useState('title')
  let list = data
  const SelectSort = () => {
    return (
      <form style={{ marginBottom: '2rem' }}>
        <label>Sort By:</label>
        <select
          style={{ marginLeft: '1rem', fontSize: '1rem' }}
          onChange={(e) => setSort(e.target.value)}
          value={sort}>
          <option value="none">-- Select --</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="medium">Medium</option>
        </select>
      </form>
    )
  }

  switch (sort) {
    case 'title':
      list = list.sort((a, b) => SortTitle(a, b))
      break
    case 'medium':
      list = list.sort((a, b) => SortMedium(a, b))
      break
    case 'author':
      list = list.sort((a, b) => SortAuthor(a, b))
      break
    case 'default':
      break
  }

  return (
    <div className="Canon">
      <p>
        These are the things that influence how I think, work, and imagine. This
        list is far from exhaustive, but tries to identify some of my influences
        in my poetry, storytelling, and thought.
      </p>
      <SelectSort />
      <Container>
        {list.map((node, index) => (
          <CanonItem
            key={node.id}
            title={node.title}
            author={node.author}
            medium={node.medium}
            text={node.text}
            link={node.link}
          />
        ))}
      </Container>
      <p style={{ textAlign: 'center' }}>
        <i>
          This page was inspired by{' '}
          <a href="https://www.brendanschlagel.com/2017/11/05/canonize-creating-personal-canon-template/">
            this blog post
          </a>{' '}
          by Brendan Schlagel. I borrowed heavily from{' '}
          <a href="https://github.com/bschlagel/canonize/blob/master/webpage/style-light.css">
            his source code
          </a>{' '}
          in creating this page.
        </i>
      </p>
      <p style={{ textAlign: 'center' }}>
        If you&#9;re interested in the books I&#9;ve been reading recently,
        check out my{' '}
        <a href="https://www.goodreads.com/author/show/19228078.D_S_Chapman">
          Goodreads page
        </a>
      </p>
    </div>
  )
}

function CanonItem(props) {
  const { medium, title, text, category, link, author } = props
  let icon
  switch (medium) {
    case 'book':
      icon = '📖'
      break
    case 'song':
      icon = '🎵'
      break
    case 'movie':
      icon = '🎥'
      break
    case 'tv':
      icon = '📺'
      break
    case 'poem':
      icon = '📝'
      break
    default:
      icon = '⁉️'
      break
  }

  const Item = styled.div(
    `
        display: block;
        float: left;
        text-align: left;
        box-sizing: border-box;
        margin: 0 3% 20px 0;
        overflow: hidden;
        position: relative;
        border-radius: 5px;
        transition: all .25s;
        width: 30%;
        min-width: 300px;
        min-height:300px;
        &: hover {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        };
        padding-top:1rem;

        ${bpMaxLG} {
          width: 40%;
        }
        ${bpMaxSM} {
          width: 100%;
        }
        `
  )

  const Icon = styled.div(
    `
        font-size:2em;
        text-align: center;
        `
  )

  const Title = styled.h3(
    `
        text-align: center;
        margin-bottom: .25rem;
        `
  )

  const Author = styled.h4(
    `
        padding:0;
        margin:0;
        text-align:center;
        `
  )

  const Description = styled.p(
    `
        padding: 15px 20px;
        text-align: center;
        `
  )

  const ItemLink = styled.a(
    `
        text-decoration:none;
        color: ${colors.text};
        &:hover {
            color: ${colors.text};
            text-decoration:none;
            opacity: .8;
            -webkit-transition: all -webkit-transform .25s;
            transition: all .25s;
        };
        `
  )

  return (
    <Item>
      <ItemLink href={link}>
        <Icon>{icon}</Icon>
        <Title>{title}</Title>
        <Author>{author}</Author>
        <Description>{text}</Description>
      </ItemLink>
    </Item>
  )
}

function SortTitle(a, b) {
  let titleA = a.title.toUpperCase() // ignore upper and lowercase
  let titleB = b.title.toUpperCase() // ignore upper and lowercase
  if (titleA < titleB) {
    return -1
  }
  if (titleA > titleB) {
    return 1
  }

  // names must be equal
  return 0
}

function SortAuthor(a, b) {
  let authorA = a.author.toUpperCase() // ignore upper and lowercase
  let authorB = b.author.toUpperCase() // ignore upper and lowercase
  if (authorA < authorB) {
    return -1
  }
  if (authorA > authorB) {
    return 1
  }

  // names must be equal
  return 0
}

function SortMedium(a, b) {
  let A = a.medium.toUpperCase() // ignore upper and lowercase
  let B = b.medium.toUpperCase() // ignore upper and lowercase
  if (A < B) {
    return -1
  }
  if (A > B) {
    return 1
  }

  // names must be equal
  return 0
}

const CanonPage = ({ data }) => {
  return (
    <Layout title={'Personal Canon'} type={'📚'}>
      <Canon data={data} />
    </Layout>
  )
}

export default CanonPage
