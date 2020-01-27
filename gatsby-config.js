module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: `${__dirname}/components`,
      },
    },
    `gatsby-transformer-react-docgen`,
  ],
}
