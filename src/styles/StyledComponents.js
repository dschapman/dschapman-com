import styled from 'react-emotion'

const Body = styled.div(
  tw`flex flex-col w-screen`
)

const Content = styled.div(
  tw` bg-white flex-1 w-screen px-25 xs:px-4 sm:px-6 md:px-15 lg:px-20 
   overflow-y-auto scrolling-touch scrolling-auto mx-auto
   2xl:max-w-2xl xl:max-w-xl lg:max-w-lg md:max-w-md sm:max-w-sm xs:max-w-xs
  `,
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
  tw`text-blue-darker pt-4 text-2xl
  xs:text-center sm-text-center md-text-center lg:text-left xl:text-left 2xl:text-left`,
  props => ({color: props.color})
)

const H3 = styled.h3(
  tw`text-blue-darker pt-4 text-xl
  xs:text-center sm-text-center md-text-center lg:text-left xl:text-left 2xl:text-left`,
  props => ({color: props.color})

)

export {Div, P, H1, H2, H3, Content, Body}