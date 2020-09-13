/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import { jsx } from 'theme-ui'

const Footer = () => {
  return (
    <footer
      sx={{
        display: 'flex',
        variant: 'styles.footer',
        mx: 'auto',
        alignItems: 'center',
      }}>
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
          sx={{
            paddingTop: 3,
            fontFamily: 'body',
            fontSize: 1,
            color: 'white',
          }}>
          Content is copyrighted 2019-2020 © D.S. Chapman. This site was built
          using GatsbyJS. Code for this website is open source and available on{' '}
          <a href="https://github.com/dschapman/my-website">Github</a>
        </div>
      </FooterContent>
    </footer>
  )
}

const FooterContent = styled.footer`
  margin: 0 auto;
  width: 868px;
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
