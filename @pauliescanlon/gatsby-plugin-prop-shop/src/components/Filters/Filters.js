/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import * as styles from './styles'

export const Filters = ({
  searchFilter,
  setSearchFilter,
  filterOptions,
  noPropsFilter,
  setNoPropsFilter,
}) => {
  return (
    <div sx={styles.filters}>
      <select
        sx={styles.select}
        onChange={setSearchFilter}
        value={searchFilter}
      >
        {filterOptions.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
      <div sx={styles.checkbox}>
        <input
          type="checkbox"
          defaultChecked={noPropsFilter}
          onChange={setNoPropsFilter}
        />
        Hide no props
      </div>
    </div>
  )
}

Filters.propTypes = {
  /** Parent noPropsFilter state value */
  noPropsFilter: PropTypes.bool,
  /** Sets parent noPropsFilter state value */
  setNoPropsFilter: PropTypes.func,
  /** Parent searchFilter state value */
  searchFilter: PropTypes.string,
  /** Sets parent searchFilter state value */
  setSearchFilter: PropTypes.func,
  /** list of TableHeader values taken from graphql query*/
  filterOptions: PropTypes.arrayOf(PropTypes.string),
}
