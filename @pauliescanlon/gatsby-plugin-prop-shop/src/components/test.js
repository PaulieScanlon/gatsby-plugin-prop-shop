import React from "react"

const Test = ({ siteTitle }) => <header>{siteTitle}</header>

Test.propTypes = {
  siteTitle: PropTypes.string,
}

Test.defaultProps = {
  siteTitle: ``,
}

export default Test
