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
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/styles/typography.js`,
            },
        },
    ]
}