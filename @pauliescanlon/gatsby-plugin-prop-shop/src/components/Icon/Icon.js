/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import * as styles from './styles'

export const Icon = ({ iconPath, iconFill, iconSize, ...rest }) => (
  <svg
    {...rest}
    sx={styles.svg}
    width={iconSize}
    height={iconSize}
    viewBox={`0 0 24 24`}
    preserveAspectRatio="xMidYMid meet"
    x="0"
    y="0"
    id={iconPath}
  >
    <path d={iconPath} fill={iconFill} />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
)

Icon.defaultProps = {
  /** The default px value for the width and height */
  iconSize: 22,
  /** The default fill css value */
  iconFill: 'currentColor',
}

Icon.propTypes = {
  /** Material Icon svg path */
  iconPath: PropTypes.string.isRequired,
}
