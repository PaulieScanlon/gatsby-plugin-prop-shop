/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import * as styles from './styles'

export const PropType = ({ type }) => {
  const { name, value } = type || { name: '', value: '' }

  return (
    <code>
      <pre sx={styles.type}>{`${name} ${
        value ? JSON.stringify(value, null, 2) : ''
      }`}</pre>
    </code>
  )
}

PropType.propTypes = {
  /**  The type value of the prop from react-docgen */
  type: PropTypes.any,
}
