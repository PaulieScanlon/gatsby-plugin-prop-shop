/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import * as styles from './styles'

export const TableContainer = ({ children }) => (
  <div sx={styles.tableContainer}>{children}</div>
)

export const TableWrapper = ({ children }) => (
  <div sx={styles.tableWrapper}>{children}</div>
)

export const Table = ({ children }) => (
  <table sx={styles.table}>{children}</table>
)

Table.propTypes = {
  children: PropTypes.node,
}

export const Thead = ({ children }) => (
  <thead sx={styles.thead}>{children}</thead>
)

Thead.propTypes = {
  children: PropTypes.node,
}

export const Tbody = ({ children }) => (
  <tbody sx={styles.tbody}>{children}</tbody>
)

Tbody.propTypes = {
  children: PropTypes.node,
}

export const Tr = ({ children, ...rest }) => (
  <tr {...rest} sx={styles.tr}>
    {children}
  </tr>
)

Tr.propTypes = {
  children: PropTypes.node,
}

export const Th = ({ children, ...rest }) => (
  <th {...rest} sx={styles.th}>
    {children}
  </th>
)

Th.propTypes = {
  children: PropTypes.node,
}

export const Td = ({ children, ...rest }) => (
  <td {...rest} sx={styles.td}>
    {children}
  </td>
)

Td.propTypes = {
  children: PropTypes.node,
}
