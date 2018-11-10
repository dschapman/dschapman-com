import styled from 'react-emotion'

const Body = styled.div(
  tw`px-25 xs:px-4 sm:px-10 md:px-15 lg:px-20`,
)

const Div = styled.div(
  tw`overflow-hidden`,
)

const P = styled.p(
  tw``,
  props => ({color: props.color})
)

const H1 = styled.h1(
  tw`text-blue-darkest mt-8 mb-1`,
  props => ({color: props.color})
)

const H2 = styled.h2(
  tw`text-blue-darker`,
  props => ({color: props.color})
)

export {Div, P, H1, H2, Body}