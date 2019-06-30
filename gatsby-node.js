const path = require("path")

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise(async resolve => {
    const result = await graphql(`
      {
        allAirtable {
          edges {
            node {
              table
              data {
                slug: Slug
              }
            }
          }
        }
      }
    `)
    result.data.allAirtable.edges.forEach(({ node }) => {
      const isPage = node.table === "Cases"
      createPage({
        path: `cases/${node.data.slug}`,
        component: isPage
          ? path.resolve(`./src/templates/victims.jsx`)
          : path.resolve(`./src/templates/cases.jsx`),
      })
    })
    resolve()
  })
}
