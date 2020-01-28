const path = require("path")

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        // demo path
        path: path.resolve(`src/components`),
      },
    },
    `gatsby-transformer-react-docgen`,
  ],
}
