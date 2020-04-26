const slugify = require('slugify')
const path = require('path')
module.exports = {
  siteMetadata: {
    title: 'D.S. Chapman',
    twitter: '@ds_chapman',
    description:
      'The website and digital home of writer and poet D.S. Chapman. Explore for articles, poetry, and other projects including my recent book - Seasons of Thought.',
  },
  plugins: [
    {
      resolve: `gatsby-theme-austere`,
      options: {
        basePath: '/articles/all',
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
      resolve: '@aengusm/gatsby-theme-brain',
      options: {
        notesDirectory: 'content/notes/',
        rootPath: 'notes',
        rootNote: 'notes',
        mdxOtherwiseConfigured: true,
        generateSlug: (filename) => {
          const filenameWithExtension = path.parse(filename).name

          return slugify(filenameWithExtension, {
            lower: true,
          })
        },
      },
    },
  ],
}
