import Typography from "typography"
import {mainTheme} from "./styles"

const typography = new Typography({
    baseFontSize: '20px',
    baseLineHeight: '1.4',
    scaleRatio: '1',
    headerFontFamily: ['adobe-garamond-pro', 'serif'],
    headerWeight: 400,
    bodyFontFamily: ['adobe-garamond-pro', 'serif'],
    bodyWeight: 400,
    overrideStyles: ({rhythm}, options) => ({
        'a': {
            color: mainTheme.link,
            textDecoration: 'none',
        },
        'a:hover': {
            textDecoration: 'underline',
            color: mainTheme.linkHover,

        },
        'blockquote': {
            borderLeft: `${rhythm(3 / 16)} solid`,
            paddingLeft: rhythm(13/16),
            marginLeft: 0,
            marginRight: 0
        },
        'blockquote > :last-child': {
          marginBottom: 0,
        },
        'blockquote cite': {
          fontStyle: 'normal',
        },
        'blockquote cite:before': {
          content: '"— "',
        },
        'pre': {
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            padding: '1em',
            overflow: 'auto'
        },
        
    }),

})

export default typography