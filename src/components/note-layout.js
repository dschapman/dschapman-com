/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { Link } from 'gatsby'
import Header from './note-header'
import MyCustomBreadcrumb from './breadcrumb'
import { useBreadcrumb } from 'gatsby-plugin-breadcrumb'

export default ({
  children,
  title,
  description,
  seoTitleAddition1,
  seoTitleAddition2,
  location,
  crumbLabel,
}) => {
  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: crumbLabel,
  })

  return (
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
        <div
          sx={{
            fontSize: '3',
          }}>
          <MyCustomBreadcrumb crumbs={crumbs} />
        </div>
        <h1 sx={{ fontFamily: 'heading', fontWeight: 'heading', mt: 0 }}>
          {title}
        </h1>
        {children}
      </div>
    </Styled.root>
  )
}
