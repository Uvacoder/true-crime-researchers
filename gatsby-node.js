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
        allAirtable(filter: { data: {}, table: { eq: "Cases" } }) {
          edges {
            node {
              table
              data {
                published: Published
                slug: Slug
              }
            }
          }
        }
      }
    `)
    result.data.allAirtable.edges.forEach(({ node }) => {
      const isPage = node.table === "Cases" && node.data.published === "true"
      createPage({
        path: `cases/${node.data.slug}`,
        component: isPage
          ? path.resolve(`./src/templates/case.jsx`)
          : path.resolve(`./src/templates/pending.jsx`),
        context: {
          slug: node.data.slug,
        },
      })
    })
    resolve()
  })
}
