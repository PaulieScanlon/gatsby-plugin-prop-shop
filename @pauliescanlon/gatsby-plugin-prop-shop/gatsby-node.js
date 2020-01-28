const fs = require("fs-extra")

const defaultOutputDir = `static`
const childDir = `prop-shop`
const defaultName = `prop-shop-db.json`

const runQuery = async graphql => {
  return graphql(`
    {
      allComponentMetadata {
        edges {
          node {
            displayName
            props {
              flowType
              tsType
              type {
                name
                value
                raw
              }
              required
              defaultValue {
                value
              }
              name
              description {
                text
              }
            }
          }
        }
      }
    }
  `)
}

exports.onPostBuild = async ({ graphql }, pluginOptions) => {
  console.log("////////  onPostBuild")
  const { outputDir } = pluginOptions

  const outputPath = `${outputDir ? outputDir : defaultOutputDir}/${childDir}`

  runQuery(graphql).then(result => {
    fs.ensureDirSync(outputPath)
    fs.writeJsonSync(`${outputPath}/${defaultName}`, result, { spaces: 2 })
  })
}
