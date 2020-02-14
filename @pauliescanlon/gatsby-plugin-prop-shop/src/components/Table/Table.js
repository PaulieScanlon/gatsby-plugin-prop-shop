/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import * as styles from './styles'

export const TableContainer = ({ children, ...rest }) => (
  <div {...rest} sx={styles.tableContainer}>
    {children}
  </div>
)

TableContainer.propTypes = {
  /** React children */
  children: PropTypes.any,
  /** Rest object */
  rest: PropTypes.object,
}

export const TableWrapper = ({ children }) => (
  <div sx={styles.tableWrapper}>{children}</div>
)

TableWrapper.propTypes = {
  /** React children */
  children: PropTypes.any,
}

export const Table = ({ children }) => (
  <table sx={styles.table}>{children}</table>
)

Table.propTypes = {
  /** React children */
  children: PropTypes.any,
}

export const Thead = ({ children }) => (
  <thead sx={styles.thead}>{children}</thead>
)

Thead.propTypes = {
  /** React children */
  children: PropTypes.any,
}

export const Tbody = ({ children }) => (
  <tbody sx={styles.tbody}>{children}</tbody>
)

Tbody.propTypes = {
  /** React children */
  children: PropTypes.any,
}

export const Tr = ({ children, ...rest }) => (
  <tr {...rest} sx={styles.tr}>
    {children}
  </tr>
)

Tr.propTypes = {
  /** React children */
  children: PropTypes.any,
  /** Rest object */
  rest: PropTypes.object,
}

export const Th = ({ children, ...rest }) => (
  <th {...rest} sx={styles.th}>
    {children}
  </th>
)

Th.propTypes = {
  /** React children */
  children: PropTypes.any,
  /** Rest object */
  rest: PropTypes.object,
}

export const Td = ({ children, ...rest }) => (
  <td {...rest} sx={styles.td}>
    {children}
  </td>
)

Td.propTypes = {
  /** React children */
  children: PropTypes.any,
  /** Rest object */
  rest: PropTypes.object,
}
