const path = require('path')

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // only update the `/orders` page
  if (page.path.match(/^\/orders/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client
    page.matchPath = "/orders/*"
    // update the page
    createPage(page)
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const res = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: {regex: "/blog/"} }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            id
            frontmatter {
              path
              date
              title
            }
          }
        }
      }
    }
  `)

  if (!res.errors) {
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve('src/components/blog/blogPost.js'),
        context: {},
      })
    })
  }
}
