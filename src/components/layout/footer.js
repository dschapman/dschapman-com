/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import colors from '../../lib/colors'

const Footer = () => {
  const FooterContainer = styled.footer`
    display: flex;
    position: absolute;
    background: ${colors.bluegreen};
    right: 0;
    margin-top: 5px;

    flex-shrink: 0;
    padding: 3rem;
    width: 84%;
    padding-left: 8%;
    padding-right: 8%;
    font-family: proxima-nova;
    font-weight: 100;
    font-size: 2rem;
    margin: 0 auto;
    align-items: center;
  `
  return (
    <FooterContainer>
      <FooterContent>
        <h2 style={{ color: 'white' }}>Contact</h2>
        <div>
          <a
            style={{ paddingRight: '1rem' }}
            href="mailto:contact@dschapman.com">
            Email
          </a>
          <a
            style={{ paddingRight: '1rem' }}
            href="https://twitter.com/ds_chapman">
            Twitter
          </a>
          <a
            style={{ paddingRight: '1rem' }}
            href="https://github.com/dschapman">
            Github
          </a>
        </div>
        <div
          css={css`
            font-size: 1rem;
            padding-top: 2rem;
            color: white;
          `}>
          Content is copyrighted 2019-2020 © D.S. Chapman. This site was built
          using GatsbyJS. Code for this website is open source and available on{' '}
          <a href="https://github.com/dschapman/my-website">Github</a>
        </div>
      </FooterContent>
    </FooterContainer>
  )
}

const FooterContent = styled.footer`
  margin: 0 auto;
  padding-right: 12.5%;
  a {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    color: white;
    &:hover {
      text-decoration: none;
    }
  }
`

export default Footer
