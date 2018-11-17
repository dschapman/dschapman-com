const path = require('path')

const componentWithMDXScope = require("gatsby-mdx/component-with-mdx-scope");

const createTagPages = (createPage, posts) => {
    const allTagsIndexTemplate = path.resolve('src/templates/allTagsIndex.js')
    const singleTagIndexTemplate = path.resolve('src/templates/singleTagIndex.js')

    const postsByTag = {}

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

    createPage({
        path: '/tags',
        component: allTagsIndexTemplate,
        context: {
            tags: tags.sort()
        }
    })

    tags.forEach(tagName => {
        const posts = postsByTag[tagName]

        createPage({
            path: `/tags/${tagName}`,
            component: singleTagIndexTemplate,
            context: {
                posts,
                tagName
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
              allMdx (
                sort: {order: ASC, fields: [frontmatter___date]}
            ) {
                edges {
                  node {
                    frontmatter{
                        tags
                        title
                        path
                    }
                    id
                    parent {
                      ... on File {
                        name
                        sourceInstanceName
                      }
                    }
                    code {
                      scope
                    }
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
          // Create blog posts pages.
          posts = result.data.allMdx.edges
          posts.forEach(({ node }, index) => {
            createPage({
              path: `/${node.parent.sourceInstanceName}/${node.parent.name}`,
              component: componentWithMDXScope(
                path.resolve("./src/components/blog-layout.js"),
                node.code.scope
              ),
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