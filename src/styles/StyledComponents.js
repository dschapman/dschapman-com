import styled from 'react-emotion'

const DIV = styled.div(
  tw`overflow-hidden`,
  props => ({color: props.color})
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

export {DIV, P, H1, H2}