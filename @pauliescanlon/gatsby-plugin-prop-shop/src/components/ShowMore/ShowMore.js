/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import { Icon } from '../Icon'

import * as styles from './styles'

const SHOW_LESS = 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z'
const SHOW_MORE = 'M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'

export const ShowMore = ({ isTableExpanded, setIsTableExpanded }) => (
  <button sx={styles.showMoreButton} onClick={setIsTableExpanded}>
    <span sx={styles.text}>{isTableExpanded ? 'show less' : 'show more'}</span>
    {isTableExpanded ? (
      <Icon iconPath={SHOW_LESS} />
    ) : (
      <Icon iconPath={SHOW_MORE} />
    )}
  </button>
)

ShowMore.propTypes = {
  /** Parent isTableExpanded state value */
  isTableExpanded: PropTypes.bool,
  /** Sets parent setIsTableExpanded state value */
  setIsTableExpanded: PropTypes.func,
}
