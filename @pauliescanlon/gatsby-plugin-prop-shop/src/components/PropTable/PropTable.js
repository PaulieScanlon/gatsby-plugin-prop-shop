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

export const PropTable = ({ propData, filterOptions }) => (
  <TableContainer>
    <TableWrapper>
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
                        <Td>{prop.description.text || ''}</Td>
                      </Tr>
                    )
                  })
                ) : (
                  <Tr className={`tr-${propDataIndex % 2 ? 'odd' : 'even'}`}>
                    {filterOptions.map((_, headerIndex) => (
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
  filterOptions: PropTypes.arrayOf(PropTypes.string),
  /** The search term defined by the user input */
  searchTerm: PropTypes.string,
}
