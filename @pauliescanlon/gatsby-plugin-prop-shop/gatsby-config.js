const path = require('path')

module.exports = pluginOptions => {
  const { source } = pluginOptions

  if (!source) throw new Error('prop-shop needs a source')

  let filesystemSources = []

  const soureFilesystemOption = name => {
    return {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `${name}`,
        path: path.resolve(`src/${name}`),
      },
    }
  }

  if (Array.isArray(source)) {
    for (let item of source) {
      filesystemSources.push(soureFilesystemOption(item))
    }
  } else {
    filesystemSources.push(soureFilesystemOption(source))
  }

  return {
    plugins: [
      ...filesystemSources,
      `gatsby-transformer-react-docgen`,
      `gatsby-plugin-theme-ui`,
    ],
  }
}
