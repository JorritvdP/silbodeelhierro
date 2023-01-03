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
    {
      resolve: `gatsby-source-facebook-graphql`,
      options: {
        // Facebook account or page ID
        pageId: 10209419148713714,
        params: {
          fields: [
            "about",
            "bio",
            "category",
            "category_list",
            "company_overview",
            "features",
            "hours",
            "phone",
            "location",
            "username",
            "description",
            "products",
            "photos{webp_images}",
            "rating_count",
            "place_type",
          ],
        },
        // Access Token from facebook
        accessToken:
          EAAGsy4jkkJIBAF3lbnn7N9CZB30TZBQNgakPdYSO7KII0r4F1D0nF6gWzCxUEhYjH0JGtOyejDjywH6Sk67QmBOH4GVI3aCHeFyZC05Jv5wMF2ssixZAJODQrdeG25Hpy6I2JRA9aZCpb5xtiLeGcQnT1KAivveUwAsZCZCjACNbai2YB5SmyDPNZCOxvjrcCxeBjcIztZBkcGC2NLQlBZAoxNb5OivZA01Kf79cv536I8bKoAXLZAKE9zSH,
        // process.env.GATSBY_FACEBOOK_GRAPH_TOKEN,
      },
    },
  ],
};
