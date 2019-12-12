import styled from '@emotion/styled'
import {mainTheme,mq} from './styles'

const Body = styled('div')
  `
  display: flex;
  flex-direction: column;
  width: 100vw
  `

const Content = styled('div')`

  background: ${mainTheme.background};
  flex: 1;
  width: 100vw;
  margin: 0 auto 0;
  overflow-y: visible;
  -webkit-overflow-scrolling: touch;
  -webkit-overflow-scrolling: visible;
  ${mq[0]} { 
    padding: 0 1rem 0;
    max-width: 20rem;
  }
  ${mq[1]} { 
    padding: 0 1.5rem 0;
    max-width: 30rem;
  }
  ${mq[2]} { 
    padding: 0 3.5rem 0;
    max-width: 40rem;
  }
  ${mq[3]} { 
    padding: 0 5rem 0;
    max-width: 50rem;
  }
  ${mq[4]} { 
    max-width: 60rem;
    padding: 0 6rem 0;
  }
  ${mq[5]} { 
    max-width: 60rem;
  }
`

const H1 = styled('h1')(
  `
  color: ${mainTheme.primaryDarkest};
  margin-top:1rem; 
  margin-bottom:1.25rem;
  font-size:1.75rem;
  `,
  props => ({color: props.color})
)

const H2 = styled('h2')(
  `
  color: ${mainTheme.primaryDarkest};
  padding-top: 1rem;
  font-size: 1.5 rem;
  text-align: left;
  line-height: 1.4;
  ${mq[0]} {
    text-align:center;
  }
  ${mq[1]} {
    text-align:center;
  }
  ${mq[2]} {
    text-align:center;
  }
  ${mq[3]} {
    text-align:left;
  }
  a {
    color: ${mainTheme.primaryDarkest};
  }
   `,
  props => ({color: props.color})
)

const H3 = styled('h3')(
  `
  color: ${mainTheme.primaryDarkest};
  padding-top: 1rem;
  font-size: 1.25 rem;
  text-align: left;
  ${mq[0]} {
    text-align:center;
  }
  ${mq[1]} {
    text-align:center;
  }
  ${mq[2]} {
    text-align:center;
  }
  ${mq[3]} {
    text-align:left;
  }
  a {
    color: ${mainTheme.primaryDarkest};
  }
   `,
  props => ({color: props.color})

)

const H4 = styled('h4')(
  `
  color: ${mainTheme.primaryDarkest};
  padding-top: 1rem;
  font-size: 1.1 rem;
  text-align: left;
  ${mq[0]} {
    text-align:center;
  }
  ${mq[1]} {
    text-align:center;
  }
  ${mq[2]} {
    text-align:center;
  }
  ${mq[3]} {
    text-align:left;
  }
  a {
    color: ${mainTheme.primaryDarkest};
  }
   `,
  props => ({color: props.color})

)

export {H1, H2, H3, H4, Content, Body}