const path = require('path')



exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"]
    }
  });
};

const createTagPages = (createPage, posts) => {
    const allTagsIndexTemplate = path.resolve('src/templates/allTagsIndex.js')
    const singleTagIndexTemplate = path.resolve('src/templates/singleTagIndex.js')
    const allBlogIndex = path.resolve('src/templates/allBlogIndex.js')
    const postsByTag = {}
    const allPosts = {}
    
    posts.forEach(({node}) => {
        if (node.frontmatter.tags) {
            node.frontmatter.tags.forEach(tag => {
                if(!postsByTag[tag]) {
                    postsByTag[tag] = []
                }

                postsByTag[tag].push(node)
            })
        }
    })

    const tags = Object.keys(postsByTag)

    posts.forEach(({node}) => {
      
          

      allPosts[node.frontmatter.title] = node

  })
    const titles = Object.keys(allPosts)
    

    createPage({
        path: 'articles/tags',
        component: allTagsIndexTemplate,
        context: {
            tags: tags.sort()
        }
    })

    tags.forEach(tagName => {
        const posts = postsByTag[tagName]

        createPage({
            path: `articles/tags/${tagName}`,
            component: singleTagIndexTemplate,
            context: {
                posts,
                tagName,
            }

        })
    })
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return new Promise((resolve, reject) => {
      resolve(
        graphql(
          `
          {
            allMdx(sort: {order: ASC, fields: [frontmatter___date]}, filter: {frontmatter: {published: {eq: true}}}) {
              edges {
                node {
                  frontmatter {
                    tags
                    date
                    description
                    title
                    type
                    path
                  }
                  id
                  parent {
                    ... on File {
                      id
                      name
                      sourceInstanceName
                    }
                  }
                  body
                }
              }
            }
          }          
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }
          // Create tag pages
          createTagPages(createPage,result.data.allMdx.edges)
          // Create posts pages.
          posts = result.data.allMdx.edges
          posts.forEach(({ node }, index) => {
            createPage({
              path: `${node.parent.sourceInstanceName}/${node.parent.name}`,
              component: 
                path.resolve("./src/components/blog-layout.js"),
              context: { 
                  id: node.id,
                  frontmatter:node.frontmatter,
                }
            });
          });
        })
      );
    });
  };