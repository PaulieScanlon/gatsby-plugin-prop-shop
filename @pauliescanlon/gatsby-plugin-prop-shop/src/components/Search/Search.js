/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import { Icon } from '../Icon'

import * as styles from './styles'

const SEARCH_ICON =
  'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'

const CLEAR_SEARCH_ICON =
  'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'

export const Search = ({
  searchFilter,
  setSearchFilter,
  filterOptions,
  searchTerm,
  setSearchTerm,
  clearSearchTerm,
}) => {
  return (
    <div sx={styles.search}>
      <div>
        <Icon iconPath={SEARCH_ICON} style={{ marginTop: 5 }} />
      </div>
      <select
        sx={styles.select}
        onChange={setSearchFilter}
        value={searchFilter}
      >
        {filterOptions.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
      <div sx={styles.divider} />
      <input
        sx={styles.input}
        placeholder={`Search by ${searchFilter} ...`}
        value={searchTerm || ''}
        onChange={setSearchTerm}
      />
      {searchTerm ? (
        <button sx={styles.clearSearchButton} onClick={clearSearchTerm}>
          <Icon iconPath={CLEAR_SEARCH_ICON} />
        </button>
      ) : null}
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
  setSearchFilter: PropTypes.func,
  /** list of TableHeader values taken from graphql query*/
  filterOptions: PropTypes.arrayOf(PropTypes.string),
}
