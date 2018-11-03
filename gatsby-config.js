console.log(__dirname)
module.exports = {
    siteMetadata: {
        title: 'D. S. Chapman',
        description: 'This is my cool blog.'
    },
    plugins: [
        'gatsby-transformer-remark',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/src/pages`
            }
        },
        'gatsby-plugin-tailwindcss',
        {
            resolve: `gatsby-plugin-emotion`,
            options: {
              // Accepts all options defined by `babel-plugin-emotion` plugin.
            },
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
        
        
    ]
}