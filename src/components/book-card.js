/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import book from '../../content/dschapman-com-content/assets/seasons-of-thought-cover.png'
import { ExternalLink, InternalLink } from './layout/links'
import colors from '../lib/colors'
import { bpMaxLG } from '../lib/breakpoints'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 55%;
  ${bpMaxLG} {
    width: 100%;
    justify-content: center;
  }
`

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const Button = styled(ExternalLink)`
  padding: 1rem;
  border: solid 2px ${colors.red};
  border-radius: 30px;
  text-decoration: none;
  margin: .5rem; 2rem;
  white-space: nowrap;
  font-size: 1rem;
`

const BookCard = ({ description }) => {
  return (
    <Container>
      <a href="https://www.amazon.com/Seasons-Thought-D-S-Chapman/dp/0578504359">
        <img
          src={book}
          css={css`
            float: left;
            width: auto;
            max-width: 11rem;
            height: auto;
            vertical-align: top;
            margin-right: 1rem;
            padding-right: 1rem;
          `}
          alt="Cover for Seasons of Thought"
        />
      </a>
      <div
        css={css`
          flex: 2;
          display: flex;
          flex-direction: column;
        `}>
        <p>
          Seasons of Thought is a collection of poetry that traces its themes
          across the changing seasons. The poems in the collection use the
          passage of time as a canvas to explore nature, family, childhood,
          faith, and other aspects of the human condition. Seasons of Thought is
          my first collection of poetry which came out of a year-long project{' '}
          <InternalLink to="/articles/on-writing-poems-daily">
            where I wrote a poem every day
          </InternalLink>
          .
        </p>
        <Links>
          <Button to="https://www.amazon.com/Seasons-Thought-D-S-Chapman/dp/0578504359">
            Buy the Book
          </Button>
          <Button to="https://www.goodreads.com/book/show/46134618-seasons-of-thought">
            Review on Goodreads
          </Button>
        </Links>
      </div>
    </Container>
  )
}

export default BookCard
