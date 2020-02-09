/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import * as styles from './styles'

export const Search = ({
  searchTerm,
  setSearchTerm,
  clearSearchTerm,
  searchFilter,
  setSearchFilter,
  filterOptions,
}) => {
  return (
    <div sx={styles.search}>
      <input
        sx={styles.input}
        placeholder={`Search by ${searchFilter}`}
        value={searchTerm || ''}
        onChange={setSearchTerm}
      />

      {searchTerm ? (
        <button onClick={clearSearchTerm}>x</button>
      ) : (
        <button>s</button>
      )}
      <select onChange={setSearchFilter} value={searchFilter}>
        {filterOptions.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  )
}

Search.propTypes = {
  /** Parent searchTerm state value */
  searchTerm: PropTypes.string,
  /** Sets parent searchTerm state value */
  setSearchTerm: PropTypes.func.isRequired,
  /** Clear parent searchTerm state value */
  clearSearchTerm: PropTypes.func,
  /** Parent searchFilter state value */
  searchFilter: PropTypes.string,
  /** Sets parent searchFilter state value */
  setSearchFilter: PropTypes.func.isRequired,
  /** list of TableHeader values taken from graphql query*/
  filterOptions: PropTypes.arrayOf(PropTypes.string),
}
