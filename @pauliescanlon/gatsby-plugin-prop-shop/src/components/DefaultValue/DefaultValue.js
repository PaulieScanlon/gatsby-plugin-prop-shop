/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

export const DefaultValue = ({ defaultValue }) => (
  <span>{defaultValue ? defaultValue.value : ' - '}</span>
)

DefaultValue.propTypes = {
  /** The default value of the prop from react-docgen */
  defaultValue: PropTypes.any,
}
