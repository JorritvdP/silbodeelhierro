/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `silbodeelhierro`,
    siteUrl: `https://www.silbodeelhierro.com`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Montserrat`,
            file: `https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://silbodeelhierro.com/graphql`,
        // allows a fallback url if WPGRAPHQL_URL is not set in the env, this may be a local or remote WP instance.
      },
    },
  ],
};
