/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import * as styles from './styles'
import { PropType } from '../PropType'

export const TableContainer = ({ children, ...rest }) => (
  <div {...rest} sx={styles.tableContainer}>
    {children}
  </div>
)

TableContainer.propTypes = {
  /** React children */
  children: PropType.element,
  /** Rest object */
  rest: PropType.any,
}

export const TableWrapper = ({ children }) => (
  <div sx={styles.tableWrapper}>{children}</div>
)

TableWrapper.propTypes = {
  /** React children */
  children: PropType.element,
}

export const Table = ({ children }) => (
  <table sx={styles.table}>{children}</table>
)

Table.propTypes = {
  /** React children */
  children: PropType.element,
}

export const Thead = ({ children }) => (
  <thead sx={styles.thead}>{children}</thead>
)

Thead.propTypes = {
  /** React children */
  children: PropType.element,
}

export const Tbody = ({ children }) => (
  <tbody sx={styles.tbody}>{children}</tbody>
)

Tbody.propTypes = {
  /** React children */
  children: PropType.element,
}

export const Tr = ({ children, ...rest }) => (
  <tr {...rest} sx={styles.tr}>
    {children}
  </tr>
)

Tr.propTypes = {
  /** React children */
  children: PropType.element,
  /** Rest object */
  rest: PropType.any,
}

export const Th = ({ children, ...rest }) => (
  <th {...rest} sx={styles.th}>
    {children}
  </th>
)

Th.propTypes = {
  /** React children */
  children: PropType.element,
  /** Rest object */
  rest: PropType.any,
}

export const Td = ({ children, ...rest }) => (
  <td {...rest} sx={styles.td}>
    {children}
  </td>
)

Td.propTypes = {
  /** React children */
  children: PropType.element,
  /** Rest object */
  rest: PropType.any,
}
