import React, { Fragment } from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children }) => <Fragment>{children}</Fragment>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
