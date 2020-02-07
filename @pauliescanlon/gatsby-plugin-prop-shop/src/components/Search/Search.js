/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import * as styles from './styles'

export const Search = ({ searchItem, setSearchItem, clearSearchItem }) => {
  return (
    <div sx={styles.search}>
      <input
        sx={styles.input}
        placeholder="Search by prop name"
        value={searchItem || ''}
        onChange={setSearchItem}
      />

      {searchItem ? (
        <button onClick={clearSearchItem}>x</button>
      ) : (
        <button>s</button>
      )}
    </div>
  )
}

Search.propTypes = {
  /** Parent state value */
  searchItem: PropTypes.string,
  /** Sets parent state value */
  setSearchItem: PropTypes.func.isRequired,
  /** Clear parent state value */
  clearSearchItem: PropTypes.func,
}
