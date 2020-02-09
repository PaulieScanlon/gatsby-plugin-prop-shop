/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import { Icon } from '../Icon'

import * as styles from './styles'

const SEARCH_ICON =
  'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'

const CLEAR_SEARCH_ICON =
  'M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'

export const Search = ({
  searchTerm,
  setSearchTerm,
  clearSearchTerm,
  searchFilter,
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
        <button sx={styles.clearSearchButton} onClick={clearSearchTerm}>
          <Icon iconPath={CLEAR_SEARCH_ICON} />
        </button>
      ) : (
        <Icon iconPath={SEARCH_ICON} />
      )}
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
}
