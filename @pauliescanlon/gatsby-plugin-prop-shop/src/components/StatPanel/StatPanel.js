/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import { Donut } from '../Donut'

import * as styles from './styles'

export const StatPanel = ({ text, value, total, percent }) => (
  <aside sx={styles.statPanel}>
    <div sx={styles.content}>
      <div sx={styles.text}>{text}</div>
      <div sx={styles.number}>
        {value}
        <span sx={styles.total}> of {total}</span>
      </div>
    </div>
    <div sx={styles.chart}>
      <Donut percent={percent} />
    </div>
  </aside>
)

StatPanel.propTypes = {
  /** The text to display */
  text: PropTypes.string.isRequired,
  /** The number to display */
  value: PropTypes.number.isRequired,
  /** The total to display */
  total: PropTypes.number.isRequired,
  /** The percent to drive the donut chart  */
  percent: PropTypes.number.isRequired,
}
