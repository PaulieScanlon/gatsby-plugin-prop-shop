import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"

const PropShop = () => {
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
    <Fragment>
      <h1>Prop Shop</h1>
      <code>
        <pre>{JSON.stringify(allComponentMetadata, null, 2)}</pre>
      </code>
    </Fragment>
  )
}

export default PropShop
