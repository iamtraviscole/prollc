exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // Only update the `/orders` page.
  if (page.path.match(/^\/orders/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/orders/*"
    // Update the page.
    createPage(page)
  }
}
