/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import { Icon } from '../Icon'

const CHECKED =
  'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'

const UN_CHECKED =
  'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'

import * as styles from './styles'

export const Filters = ({ noPropsFilter, setNoPropsFilter }) => {
  return (
    <div sx={styles.filters}>
      <label sx={styles.checkboxLabel}>
        <input
          type="checkbox"
          defaultChecked={noPropsFilter}
          onChange={setNoPropsFilter}
          sx={styles.checkbox}
        />
        <Icon iconPath={CHECKED} className="checked-icon" />
        <Icon iconPath={UN_CHECKED} className="un-checked-icon" />
        <span sx={styles.labelText}>Hide files with no PropTypes</span>
      </label>
    </div>
  )
}

Filters.propTypes = {
  /** Parent noPropsFilter state value */
  noPropsFilter: PropTypes.bool,
  /** Sets parent noPropsFilter state value */
  setNoPropsFilter: PropTypes.func,
}
