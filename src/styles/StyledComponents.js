import styled from 'react-emotion'

const Body = styled.div(
  tw`flex flex-col w-screen`
)

const Content = styled.div(
  tw`flex-1 px-25 xs:px-4 sm:px-10 md:px-15 lg:px-20 overflow-y-auto scrolling-touch scrolling-auto mx-auto 2xl:max-w-2xl xl:max-w-xl lg:max-w-lg md:max-w-md sm:max-w-sm xs:max-w-xs`,
)

const Div = styled.div(
  tw`overflow-hidden`,
)

const P = styled.p(
  tw``,
  props => ({color: props.color})
)

const H1 = styled.h1(
  tw`text-blue-darkest mt-8 mb-1 text-4xl`,
  props => ({color: props.color})
)

const H2 = styled.h2(
  tw`text-blue-darker pt-4 text-2xl`,
  props => ({color: props.color})
)

const Poem = styled.figure(
  tw``,{
  
  p: tw`whitespace-pre`
}
)

const Stanza = styled.p(
  tw`whitespace-pre-wrap`
)

export {Div, P, H1, H2, Content, Body, Poem, Stanza}