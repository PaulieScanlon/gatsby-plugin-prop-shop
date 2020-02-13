module.exports = {
  siteMetadata: {
    title: `PropShop`,
    description: `PropShop provides an holistic view of all defined PropTypes in your project.`,
    author: `@pauliescanlon`,
    url: 'https://gatsby-plugin-prop-shop.netlify.com',
    ogImage: 'prop-shop-og-image.jpg',
    keywords: ['gatsby', 'gatsbyjs', 'gatsby-plugin'],
  },
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `@pauliescanlon/gatsby-plugin-prop-shop`,
      options: {
        source: [`src/pages`, `src/images`, `src/components`],
      },
    },
  ],
}
