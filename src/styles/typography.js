import Typography from "typography"

const typography = new Typography({
    baseFontSize: '20px',
    baseLineHeight: '1.5',
    scaleRatio: '3',
    googleFonts: [
        {
            name: 'Cormorant Upright',
            styles: ['400'],
        },
        {
            name: 'Playfair Display',
            styles: ['400', '700', '400i', '700i'],
        },
        {
            name: 'Playfair Display SC',
            styles: ['400', '700', '400i', '700i'],
        },
        {
            name: 'EB Garamond',
            styles: ['400', '400i']
        }
    ],
    headerFontFamily: ['Playfair Display SC', 'Playfair Display', 'Cormorant Upright',  'georgia', 'serif'],
    headerWeight: 400,
    bodyFontFamily: ['EB Garamond', 'serif'],
    bodyWeight: 400,
    overrideStyles: ({rhythm}, options) => ({
        'a': {
            color: '#2779bd',
            textDecoration: 'none'
        },
        'a > :hover':{
            textDecoration: 'underline'
        },
        'blockquote': {
            borderColor: '#b2b7ff',
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