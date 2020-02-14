/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment } from 'react'
import PropTypes from 'prop-types'

import {
  TableContainer,
  TableWrapper,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '../Table'

import { PropType } from '../PropType'
import { Required } from '../Required'
import { DefaultValue } from '../DefaultValue'

import * as styles from './styles'

export const PropTable = ({ isTableExpanded, propData, filterOptions }) => (
  <TableContainer style={{ height: isTableExpanded ? 'auto' : 400 }}>
    <TableWrapper>
      {propData.length < 1 ? (
        <div sx={styles.noDataText}>Oops, no propTypes to display</div>
      ) : (
        <Table>
          <Thead>
            <Tr>
              {filterOptions.map((header, index) => (
                <Th key={`${header}-${index}`}>{header}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {propData.map((edge, propDataIndex) => {
              return (
                <Fragment key={propDataIndex}>
                  <Tr
                    className={`tr-title tr-${
                      propDataIndex % 2 ? 'odd' : 'even'
                    }`}
                  >
                    <Td>{edge.node.displayName}</Td>
                    {filterOptions.map((_, headderIndex) =>
                      headderIndex === 0 ? null : <Td key={headderIndex}></Td>
                    )}
                  </Tr>
                  {edge.node.props.length ? (
                    edge.node.props.map((prop, propIndex) => {
                      return (
                        <Tr
                          className={`tr-${propDataIndex % 2 ? 'odd' : 'even'}`}
                          key={propIndex}
                        >
                          <Td>
                            <span style={{ opacity: 0 }}>
                              {edge.node.displayName}
                            </span>
                          </Td>
                          <Td>{prop.name}</Td>
                          <Td>
                            <PropType type={prop.type} />
                          </Td>
                          <Td>
                            <Required required={prop.required} />
                          </Td>
                          <Td>
                            <DefaultValue defaultValue={prop.defaultValue} />
                          </Td>

                          <Td>{prop.description.text || ' - '}</Td>
                        </Tr>
                      )
                    })
                  ) : (
                    <Tr className={`tr-${propDataIndex % 2 ? 'odd' : 'even'}`}>
                      {filterOptions.map((_, headerIndex) => (
                        <Td key={headerIndex}>
                          {headerIndex === 0 ? '' : '-'}
                        </Td>
                      ))}
                    </Tr>
                  )}
                </Fragment>
              )
            })}
          </Tbody>
        </Table>
      )}
    </TableWrapper>
  </TableContainer>
)

PropTable.propTypes = {
  /** Parent searchTerm state value */
  searchTerm: PropTypes.string.isRequired,
  /** Parent isTableExpanded state value */
  isTableExpanded: PropTypes.bool.isRequired,
  /** The result of GraphQL allComponentMetaData query + applied filter */
  propData: PropTypes.arrayOf(PropTypes.object).isRequired,
  /** Array of filter-able values taken from GraphQL query */
  filterOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
}
