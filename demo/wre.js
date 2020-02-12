const React = require('react')
const { SEO } = require('./src/components/seo')

module.exports = ({ element }) => (
  <React.Fragment>
    <SEO />
    {element}
  </React.Fragment>
)
