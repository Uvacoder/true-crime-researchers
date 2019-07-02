require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  __experimentalThemes: ["gatsby-theme-ui"],
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        //not prefaced with "GATSBY_", will not automatically be included client-side unless you explicitly expose it
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: `appcAT8442e7faJRH`,
            tableName: `Audio`,
            mapping: { Thumbnail: `fileNode` },
            tableLinks: ["Cases"],
          },
          {
            baseId: `appcAT8442e7faJRH`,
            tableName: `Cases`,
            tableLinks: [
              "Audio",
              "Events",
              "Persons_of_Interest",
              "Texts",
              "Victims",
              "Videos",
            ],
          },
          {
            baseId: `appcAT8442e7faJRH`,
            tableName: `Texts`,
            tableLinks: ["Cases"],
          },
          {
            baseId: `appcAT8442e7faJRH`,
            tableName: `Events`,
            tableLinks: ["Cases"],
          },
          {
            baseId: `appcAT8442e7faJRH`,
            tableName: `Persons_of_Interest`,
            tableLinks: ["Cases"],
            mapping: { Person_Photo: `fileNode` },
          },
          {
            baseId: `appcAT8442e7faJRH`,
            tableName: `Victims`,
            mapping: { Photo: `fileNode` },
            tableLinks: ["Cases"],
          },
          {
            baseId: `appcAT8442e7faJRH`,
            tableName: `Videos`,
            tableLinks: ["Cases"],
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: "xkz0rzi",
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
