/** @jsx jsx */
import React from 'react'
import { Styled, jsx, Box } from 'theme-ui'
import { nominalTypeHack } from 'prop-types'

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
        <Styled.h2 sx={{ color: 'white' }}>Contact</Styled.h2>
        <div>
          <a
            sx={{ paddingRight: [3, 4, 5] }}
            href="mailto:contact@dschapman.com">
            Email
          </a>
          <a
            sx={{ paddingRight: [3, 4, 5] }}
            href="https://twitter.com/ds_chapman">
            Twitter
          </a>
          <a
            sx={{ paddingRight: [3, 4, 5] }}
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

const FooterContent = ({ children }) => {
  return (
    <div
      sx={{
        mx: 'auto',
        width: 'container',
        a: {
          textDecoration: 'underline',
          textDecorationWidth: '1px',
          color: 'white',
          '&:hover': {
            textDecoration: 'none',
          },
        },
      }}>
      {children}
    </div>
  )
}

export default Footer
