const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // only update the `/orders` page
  if (page.path.match(/^\/orders/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client
    page.matchPath = '/orders/*'
    // update the page
    createPage(page)
  }
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  let parentNode = getNode(node.parent)
  if (node.internal.type === 'MarkdownRemark') {
    if (parentNode.sourceInstanceName === 'blog') {
      let value = createFilePath({ node, getNode })
      value = value.replace(/\//g, '')
      actions.createNodeField({ name: 'slug', node, value })
    }
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
            fields {
              slug
            }
            frontmatter {
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
      const { slug } = node.fields
      createPage({
        path: '/blog/' + slug,
        component: path.resolve('src/components/blog/blogPost.js'),
        context: {slug},
      })
    })
  }
}
