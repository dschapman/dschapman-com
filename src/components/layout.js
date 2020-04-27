/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'

import Header from './header'

export default ({
  children,
  title,
  description,
  seoTitleAddition1,
  seoTitleAddition2,
}) => (
  <Styled.root>
    <Header
      title={title}
      seoTitleAddition1={seoTitleAddition1}
      seoTitleAddition2={seoTitleAddition2}
      description={description}
    />
    <div
      sx={{
        maxWidth: 'container',
        px: [3, 4, 5],
      }}>
      <h1 sx={{ fontFamily: 'heading', fontWeight: 'heading' }}>{title}</h1>
      {children}
    </div>
  </Styled.root>
)
