const slugify = require('slugify')
const path = require('path')
module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.dschapman.com',
    title: 'D.S. Chapman',
    seoTitleAddition1: 'Website and Digital Home',
    seoTitleAddition2: 'Articles, Poetry, & Musings',
    twitter: '@ds_chapman',
    description:
      'The website and digital home of writer and poet D.S. Chapman. Explore for articles, poetry, and other projects including my recent book - Seasons of Thought.',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-remark-images',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // should this be configurable by the end-user?
              maxWidth: 1380,
              linkImagesToOriginal: false,
            },
          },
          { resolve: `gatsby-remark-copy-linked-files` },
          { resolve: `gatsby-remark-smartypants` },
          { resolve: `gatsby-remark-embedder` },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (e.g. <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (e.g. for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-',
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in gatsby-browser.js
              // right after importing the prism color scheme:
              //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // This adds a new language definition to Prism or extend an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below.
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
              // By default the HTML entities <>&'" are escaped.
              // Add additional HTML escapes by providing a mapping
              // of HTML entities and their escape value IE: { '}': '&#123;' }
              escapeEntities: {},
            },
          },
        ],
        remarkPlugins: [require(`remark-slug`)],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/content/dschapman-com-content/assets/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/content/dschapman-com-content/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-87782104-2',
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'poetry',
        path: `${__dirname}/content/dschapman-com-content/poems/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },

    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        defaultCrumb: {
          // location: required and must include the pathname property
          location: {
            pathname: '/notes',
          },
          // crumbLabel: required label for the default crumb
          crumbLabel: 'Notes',
          // all other properties optional
          crumbSeparator: ' / ',
        },
      },
    },
    {
      resolve: '@aengusm/gatsby-theme-brain',
      options: {
        notesDirectory: 'content/dschapman-com-content/notes/',
        rootPath: 'notes',
        rootNote: 'notes',
        mdxOtherwiseConfigured: true,
        noteTemplate: `${__dirname}/src/@aengusm/gatsby-theme-brain/templates/brain`,
        generateSlug: (filename) => {
          const filenameWithExtension = path.parse(filename).name

          return slugify(filenameWithExtension, {
            lower: true,
          })
        },
        hideDoubleBrackets: true,
      },
    },
    'gatsby-plugin-twitter',
  ],
}
