export default {
  useCustomProperties: true,
  initialColorMode: 'system',
  colors: {
    blue: '#7297A6',
    lightblue: '#BFE4F2',
    bluegreen: '#75B9BE',
    darksienna: '#2E0219',
    purple: '#925C77',
    text: '#000',
    background: '#fff',
    primary: '#272727',
    secondary: '#119',
    muted: '#f6f6f6',
    gray: '#777',
    accent: '#609',
  },
  fonts: {
    body: 'adobe-garamond-pro, serif',
    heading: 'proxima-nova, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 200,
    display: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  sizes: {
    container: 868,
  },
  textStyles: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    display: {
      variant: 'textStyles.heading',
      fontSize: [5, 6, 7],
      letterSpacing: '-0.04em',
      mt: 3,
    },
  },
  styles: {
    header: {
      maxWidth: 'container',
      mb: [4, 5, 6],
    },
    footer: {
      background: '#75B9BE',
      marginTop: '5',
      left: '0',
      bottom: '0',
      width: '100%',
      flexShrink: '0',
      padding: [3, 4, 5],
      fontFamily: 'heading',
      fontWeight: '100',
      fontSize: [4, 5, 6],
    },
    postlist: {
      listStyleType: 'none',
      m: 0,
      p: 0,
    },
    postlink: {},
    navlink: {
      color: 'text',
      textDecoration: 'none',
      fontWeight: 'body',
      textTransform: 'uppercase',
      letterSpacing: ['1px', '3px', '3px'],
      '&:hover': {
        textDecoration: 'underline',
        textDecorationThickness: '1px',
      },
    },
    root: {
      disply: 'flex',
      flexDirection: 'column',
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: [2, 3, 4],
      textRendering: 'optimizeLegibility',
      WebkitFontSmoothing: 'antialiased',
      mb: [4, 5, 6],
      height: '100vh',
    },
    h1: {
      variant: 'textStyles.heading',
    },
    h2: {
      variant: 'textStyles.heading',
      fontSize: 5,
    },
    h3: {
      variant: 'textStyles.heading',
      fontSize: 4,
    },
    h4: {
      variant: 'textStyles.heading',
      fontSize: 3,
    },
    h5: {
      variant: 'textStyles.heading',
      fontSize: 2,
    },
    h6: {
      variant: 'textStyles.heading',
      fontSize: 1,
    },
    a: {
      color: 'primary',
      textDecorationColor: 'lightblue',
      '&:hover': {
        color: 'text',
        textDecorationColor: '#354F59',
      },
    },
    pre: {
      fontFamily: 'monospace',
      fontSize: 1,
      p: 3,
      color: 'text',
      bg: 'muted',
      overflow: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      color: 'text',
      fontFamily: 'monospace',
      fontSize: 1,
    },
    inlineCode: {
      fontFamily: 'monospace',
      color: 'text',
      bg: 'muted',
      fontSize: 1,
    },
    img: {
      align: 'left',
    },
    table: {
      width: '100%',
      my: 4,
      borderCollapse: 'separate',
      borderSpacing: 0,
      'th,td': {
        textAlign: 'left',
        py: '4px',
        pr: '4px',
        pl: 0,
        borderColor: 'muted',
        borderBottomStyle: 'solid',
      },
    },
    th: {
      verticalAlign: 'bottom',
      borderBottomWidth: '2px',
    },
    td: {
      verticalAlign: 'top',
      borderBottomWidth: '1px',
    },
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: 'muted',
    },
    blockquote: {
      borderLeft: '10px solid #75b9be',
      margin: '1.5em 10px',
      padding: '0 20px',
    },
  },
}
