module.exports = pluginOptions => {
  const { source, debug } = pluginOptions

  if (!source) throw new Error('prop-shop needs a source')

  let filesystemSources = []

  const soureFilesystemOption = name => {
    if (debug) console.log('        gatsby-plugin-prop-shop : source : ', name)
    return {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `${name}`,
        path: `${name}`,
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
