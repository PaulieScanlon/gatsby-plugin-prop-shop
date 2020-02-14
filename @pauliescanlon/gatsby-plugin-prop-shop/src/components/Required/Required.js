/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import * as styles from './styles'

export const Required = ({ required }) => (
  <span sx={styles.required}>{required ? 'true' : 'false'}</span>
)

Required.propTypes = {
  /** The required value of the prop from react-docgen */
  required: PropTypes.bool,
}
