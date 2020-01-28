import React from "react"

import * as db from "../../static/prop-shop/prop-shop-db.json"

const IndexPage = () => {
  const { allComponentMetadata } = db.default.data

  return (
    <code>
      <pre>{JSON.stringify(allComponentMetadata, null, 2)}</pre>
    </code>
  )
}

export default IndexPage
