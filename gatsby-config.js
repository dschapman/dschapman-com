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
          { resolve: `gatsby-remark-numbered-footnotes` },
          { resolve: `gatsby-remark-smartypants` },
          { resolve: `gatsby-remark-embedder` },
        ],
        remarkPlugins: [require(`remark-slug`)],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/content/assets/`,
      },
    },
    {
      resolve: `gatsby-theme-blog-core`,
      options: {
        basePath: '/articles/all',
        contentPath: 'content/posts/',
        assetPath: 'content/assets',
        mdxOtherwiseConfigured: true,
      },
    },
    'gatsby-plugin-theme-ui',
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
      resolve: `gatsby-theme-blog-tags`,
      options: {
        basePath: `/articles/tags`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'poetry',
        path: `${__dirname}/content/poems/`,
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
    'gatsby-plugin-twitter',
    {
      resolve: '@aengusm/gatsby-theme-brain',
      options: {
        notesDirectory: 'content/notes/',
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
  ],
}
