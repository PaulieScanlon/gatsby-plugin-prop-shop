/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import * as styles from './styles'

export const Main = ({ children, headerHeight }) => (
  <main sx={styles.main} style={{ paddingTop: headerHeight }}>
    {children}
  </main>
)

Main.propTypes = {
  /** Padding taken from the min-height of the header  */
  headerHeight: PropTypes.number.isRequired,
}
