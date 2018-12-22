console.log(__dirname)
module.exports = {
    siteMetadata: {
        title: 'D. S. Chapman',
        tagline: 'But the birds sing so I sing',
        description: 'Poetry, Essays, Reviews'
    },
    plugins: [
        {
            resolve:'gatsby-mdx',
            options: {
                extensions:[".mdx",".md"],
                defaultLayouts: {
                    default: require.resolve("./src/components/blog-layout")
                }
            }},
        'gatsby-plugin-react-helmet',
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
                pathToConfigModule: `src/styles/typography.js`,
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
                logo: "./src/images/favicon.jpg"
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
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: false,
                // Avoids sending pageview hits from custom paths
                exclude: [""],
                // Enables Google Optimize using your container Id
                optimizeId: "",
                // Any additional create only fields (optional)
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                cookieDomain: "dschapman.com",
              }
            },
        
        
    ]
}
/*
              resolve: `gatsby-plugin-google-analytics`,
              options: {
                trackingId: "UA-87782104-2",
                // Puts tracking script in the head instead of the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: [""],
                // Enables Google Optimize using your container Id
                optimizeId: "",
                // Any additional create only fields (optional)
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                cookieDomain: "dschapman.com",
              }
            */