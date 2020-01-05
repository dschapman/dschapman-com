console.log(__dirname)
module.exports = {
    siteMetadata: {
        title: 'D.S. Chapman',
        tagline: 'The birds sing so I sing',
        description: 'Website and blog of poet D.S. Chapman. Articles on poetry, books, and the writing process. Poems about the things that poems are about.',
        url: 'https://www.dschapman.com',
        image: '/articles/avatar.jpg',
        twitterUsername: '@ds_chapman',
        siteUrl: "https://www.dschapman.com"
    },
    pathPrefix: `/images`,
    plugins: [
        'gatsby-plugin-sharp',
        {
            resolve:'gatsby-plugin-mdx',
            options: {
                extensions:[".mdx",".md"],
                defaultLayouts: {
                    default: require.resolve("./src/components/blog-layout")
                },
                gatsbyRemarkPlugins: [
                    {
                        resolve:"gatsby-remark-images",
                        options: {
                            maxWidth:1035,
                            sizeByPixelDensity:false
                        }
                    }
                    
                ],
                plugins: ['gatsby-remark-images']
            }},
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-robots-txt',
        'gatsby-plugin-tailwindcss',
        {
            resolve: `gatsby-plugin-emotion`,
            options: {
              // Accepts all options defined by `babel-plugin-emotion` plugin.
            },
          },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/src/pages`
            }
        },
        
        
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/components/typography.js`,
            },
        },
        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
              endpoint: 'https://danielschapman.us19.list-manage.com/subscribe/post?u=ecd4715a0f288f445add5af6a&amp;id=673a64233f',
            },
          },
          {
            resolve: 'gatsby-plugin-favicon',
            options: { 
                logo: "./src/images/favicon.png"
            }
          }
            ,
            {
            resolve: `gatsby-plugin-google-analytics`,
              options: {
                trackingId: "UA-87782104-2",
                // Puts tracking script in the head instead of the body
                head: true,
                // Setting this parameter is optional
              }
            },
            {
                resolve: `gatsby-transformer-yaml`,
                options: {
                  typeName: `canon`
                }
              },
              {
                resolve: `gatsby-source-filesystem`,
                options: {
                  name: `content`,
                  path: `./src/content`,
                },
              },
            
        
        
    ],
    
}