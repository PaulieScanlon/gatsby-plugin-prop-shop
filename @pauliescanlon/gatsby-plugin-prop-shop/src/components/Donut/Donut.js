/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import * as styles from './styles'

export const Donut = ({ percent, donutSize }) => {
  const remainder = 100 - percent
  const radius = 15.91549430918954

  return (
    <div sx={styles.donut}>
      <svg width="100%" height="100%" viewBox={`0 0 ${donutSize} ${donutSize}`}>
        <circle
          cx={donutSize / 2}
          cy={donutSize / 2}
          r={radius}
          sx={{ fill: 'psWhite' }}
        />

        <circle
          cx={donutSize / 2}
          cy={donutSize / 2}
          r={radius}
          fill="transparent"
          sx={{ stroke: 'psTableBodyDivider' }}
          strokeWidth="3"
        />

        <circle
          cx={donutSize / 2}
          cy={donutSize / 2}
          r={radius}
          fill="transparent"
          sx={{ stroke: 'psPrimary' }}
          strokeWidth="3"
          strokeDasharray={`${percent} ${remainder}`}
          strokeDashoffset="25"
        />
        <text
          x="50%"
          y="52%"
          dominantBaseline="middle"
          textAnchor="middle"
          sx={styles.text}
        >
          {`${percent}%`}
        </text>
      </svg>
    </div>
  )
}
Donut.defaultProps = {
  /** The default px value for the width and height */
  donutSize: 42,
}

Donut.propTypes = {
  /** The percent to drive the donut chart  */
  percent: PropTypes.number.isRequired,
  /** The size of the donut */
  donutSize: PropTypes.number,
}
