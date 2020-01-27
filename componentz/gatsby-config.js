module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: `${__dirname}/_test`,
      },
    },
    `gatsby-transformer-react-docgen`,
  ],
}
