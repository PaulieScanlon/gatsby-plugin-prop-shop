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

export const PropTable = ({ propData, tableHeaders }) => (
  <TableContainer>
    <TableWrapper>
      <Table>
        <Thead>
          <Tr>
            {tableHeaders.map((header, index) => (
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
                  {tableHeaders.map((_, headderIndex) =>
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
                          {/* // TODO the opacity is determined by if search/sort filters are applied */}
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
                          {prop.defaulValue ? prop.defaulValue.value : ''}
                        </Td>
                        <Td>{prop.description.text || ''}</Td>
                      </Tr>
                    )
                  })
                ) : (
                  <Tr className={`tr-${propDataIndex % 2 ? 'odd' : 'even'}`}>
                    {tableHeaders.map((_, headerIndex) => (
                      <Td key={headerIndex}>{headerIndex === 0 ? '' : '-'}</Td>
                    ))}
                  </Tr>
                )}
              </Fragment>
            )
          })}
        </Tbody>
      </Table>
    </TableWrapper>
  </TableContainer>
)

PropTable.propTypes = {
  /** The result of graphql allComponentMetaData query + applied filter */
  propData: PropTypes.arrayOf(PropTypes.object),
  /** The names of the table headers */
  tableHeaders: PropTypes.arrayOf(PropTypes.string),
}
