import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../templates/layout"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
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

  const { allComponentMetadata } = data

  return (
    <Layout>
      <h1>INDEX</h1>
      <p> This is where the prop table stuff will be</p>
      <code>
        <pre>{JSON.stringify(allComponentMetadata, null, 2)}</pre>
      </code>
    </Layout>
  )
}

export default IndexPage
