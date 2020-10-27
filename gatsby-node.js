const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions

  const result = await graphql(`
    query {
      poems: allMdx(
        filter: {
          fileAbsolutePath: { regex: "/content/dschapman-com-content/poems/" }
        }
      ) {
        edges {
          node {
            frontmatter {
              slug
              tags
            }
            id
          }
          previous {
            id
          }
          next {
            id
          }
        }
      }
      articles: allMdx(
        filter: {
          fileAbsolutePath: { regex: "/content/dschapman-com-content/posts/" }
        }
      ) {
        edges {
          node {
            frontmatter {
              slug
              tags
            }
            id
          }
          previous {
            id
          }
          next {
            id
          }
        }
      }
      articleTagsGroup: allMdx(
        filter: {
          fileAbsolutePath: { regex: "/content/dschapman-com-content/posts/" }
        }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
      poemTagsGroup: allMdx(
        filter: {
          fileAbsolutePath: { regex: "/content/dschapman-com-content/poems/" }
        }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
      allTagsGroup: allMdx {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  // Create blog post pages.
  const poems = result.data.poems.edges
  const articles = result.data.articles.edges
  const articleTags = result.data.articleTagsGroup.group
  const poemTags = result.data.poemTagsGroup.group
  const allTags = result.data.allTagsGroup.group
  // you'll call `createPage` for each result
  poems.forEach(({ node }) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.frontmatter.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/poems/poem-layout.js`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
  articles.forEach(({ node }) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.frontmatter.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/posts/post.js`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
  articleTags.forEach((articleTag) => {
    let tag = articleTag.fieldValue
    let slug = tag
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '') // Trim - from end of text

    createPage({
      path: `articles/tag/${slug}`,
      component: path.resolve(`./src/components/posts/post-tag.js`),
      context: { tag: tag },
    })
  })
  poemTags.forEach((poemTag) => {
    let tag = poemTag.fieldValue
    let slug = tag
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '') // Trim - from end of text

    createPage({
      path: `poetry/tag/${slug}`,
      component: path.resolve(`./src/components/poems/poem-tag.js`),
      context: { tag: tag },
    })
  })
  allTags.forEach((allTag) => {
    let tag = allTag.fieldValue
    let slug = tag
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '') // Trim - from end of text

    createPage({
      path: `/tag/${slug}`,
      component: path.resolve(`./src/components/tags/tag.js`),
      context: { tag: tag },
    })
  })

  //Create article tags index
  createPage({
    path: 'poetry/tags',
    component: path.resolve(`./src/components/poems/poem-tags.js`),
    context: { tags: poemTags },
  })
  createPage({
    path: 'articles/tags',
    component: path.resolve(`./src/components/posts/post-tags.js`),
    context: { tags: articleTags },
  })
  createPage({
    path: '/tags',
    component: path.resolve(`./src/components/tags/tags.js`),
    context: { tags: allTags },
  })
}
