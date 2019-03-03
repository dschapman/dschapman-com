import styled from 'react-emotion'
import {mainTheme,mq} from './../styles/styles'

const Body = styled.div(
  `
  display: flex;
  flex-direction: column;
  width: 100vw
  `
)

const Content = styled.div`

  background: ${mainTheme.background};
  flex: 1;
  width: 100vw;
  margin: 0 auto 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  -webkit-overflow-scrolling: auto;
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
    max-width: 70rem;
  }
`

const Div = styled.div`
  overflow-x: hidden
`

const P = styled.p(
  ``,
  props => ({color: props.color})
)

const H1 = styled.h1(
  `
  color: ${mainTheme.primaryDarkest};
  margin-top:2rem; 
  margin-bottom:0.25rem;
  font-size:2.25rem;
  `,
  props => ({color: props.color})
)

const H2 = styled.h2(
  `
  color: ${mainTheme.primaryDarkest};
  padding-top: 1rem;
  font-size: 1.5 rem;
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
   `,
  props => ({color: props.color})
)

const H3 = styled.h3(
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
   `,
  props => ({color: props.color})

)

export {Div, P, H1, H2, H3, Content, Body}