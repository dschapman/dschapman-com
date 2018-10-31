import React from 'react'
import Header from './Header'
import styled from 'react-emotion'

const Layout = styled.div(
    tw``,
)

export default ({ children }) => (
    <Layout>
      <Header />
      {children}
    </Layout>
)