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
            },
          },
          { resolve: `gatsby-remark-copy-linked-files` },
          { resolve: `gatsby-remark-smartypants` },
          { resolve: `gatsby-remark-slug` },
          { resolve: `gatsby-remark-mermaid` },
          {
            resolve: `gatsby-remark-double-brackets-link`,
            options: {
              titleToURLPath: `${__dirname}/src/lib/dendron-parse-url.js`,
            },
          },
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
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/dschapman-com-content/assets/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'articles',
        path: `${__dirname}/dschapman-com-content/posts/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blogs',
        path: `${__dirname}/dschapman-com-content/blog/`,
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
        path: `${__dirname}/dschapman-com-content/poems/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'My-notes',
        path: `${__dirname}/My-notes/`,
      },
    },

    'gatsby-plugin-sitemap',
    'gatsby-plugin-twitter',
    'gatsby-plugin-netlify',
    {
      resolve: `gatsby-transformer-markdown-references`,
      options: {
        types: ['Mdx'], // or ["MarkdownRemark"] (or both)
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              {
                return allMdx.edges.map((edge) => {
                  if (edge.node.frontmatter.slug != null) {
                    return Object.assign({}, edge.node.frontmatter, {
                      title: edge.node.frontmatter.title,
                      description: edge.node.frontmatter.excerpt,
                      date: edge.node.frontmatter.date,
                      url:
                        site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                      guid:
                        site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                      custom_elements: [
                        {
                          'content:encoded': edge.node.html
                            .replace(
                              /(?<=\"|\s)\/static\//g,
                              `${site.siteMetadata.siteUrl}\/static\/`
                            )
                            .replace(/\[\[(\w*)\|(\w*)\]\]/g, '$2'),
                        },
                      ],
                    })
                  } else {
                    let year = edge.node.frontmatter.date.substring(0, 4)
                    let month = edge.node.frontmatter.date.substring(5, 7)
                    return Object.assign({}, edge.node.frontmatter, {
                      title: edge.node.frontmatter.title,
                      description: edge.node.excerpt,
                      date: edge.node.frontmatter.date,
                      url:
                        site.siteMetadata.siteUrl +
                        `/blog/${year}/${month}/${edge.node.slug}`,
                      guid:
                        site.siteMetadata.siteUrl +
                        `/blog/${year}/${month}/${edge.node.slug}`,
                      custom_elements: [
                        {
                          'content:encoded': edge.node.html
                            .replace(
                              /(?<=\"|\s)\/static\//g,
                              `${site.siteMetadata.siteUrl}\/static\/`
                            )
                            .replace(/\[\[(\w*)\|(\w*)\]\]/g, '$2'),
                        },
                      ],
                    })
                  }
                })
              }
            },
            query: `
            {
              allMdx(
                filter: {fileAbsolutePath: {regex: "/dschapman-com-content/(?:posts|blog)/"}}
                sort: {order: DESC, fields: frontmatter___date}
              ) {
                edges {
                  node {
                    frontmatter {
                      slug
                      title
                      date
                      excerpt
                    }
                    html
                    slug
                    excerpt
                  }
                }
              }
            }
              
            `,
            output: '/rss.xml',
            title: "D.S. Chapman's RSS Feed",
          },
        ],
      },
    },
  ],
}
