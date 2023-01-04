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
    // {
    //   resolve: `gatsby-source-facebook-graphql`,
    //   options: {
    //     // Facebook account or page ID
    //     pageId: 10209419148713714,
    //     params: {
    //       fields: ["id", "name", "posts{object_id,full_picture,description}"],
    //     },
    //     // Access Token from facebook
    //     accessToken:
    //       // "EAAGsy4jkkJIBALCJSdBH95TVkhevHG1LQhIPDNquYrmSlyMe3VtZCuzvZBIXq0JaWOf0DGSm1dKHfDZAdu81pR5ZBINGP1UMV2Wf9KVqmldnLUbVXx6r9h1UWZBqsZCyYdpFnwGZCC6deA42rX5nVYMgzx1EHPxf22VhMbFw0HmKTcvyIRmH120bntUuGQEjLZAXS6kROt0ZC46yEtl1yqnUag3PhouXY4itLCdyfDyWu8w14X7sm5Jdc",
    //     // process.env.GATSBY_FACEBOOK_GRAPH_TOKEN,
    //   },
    // },
  ],
};
