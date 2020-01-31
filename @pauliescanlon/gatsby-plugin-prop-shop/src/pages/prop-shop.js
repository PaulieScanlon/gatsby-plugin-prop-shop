/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { Header } from '../components/Header'
import { Main } from '../components/Main'
import {
  TableContainer,
  TableWrapper,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '../components/Table'

import { PropType } from '../components/PropType'
import { Required } from '../components/Required'

const headerHeight = 32

const PropShop = () => {
  const data = useStaticQuery(graphql`
    query {
      allComponentMetadata {
        edges {
          node {
            displayName
            props {
              name
              type {
                name
                value
                raw
              }
              required
              defaultValue {
                value
              }
              description {
                text
              }
            }
          }
        }
      }
    }
  `)

  const { edges } = data.allComponentMetadata

  const tableHeaders = edges.reduce((items, item) => {
    if (item.node.props[0] && items.length < 1) {
      items.push(...Object.keys(item.node.props[0]))
    }
    return items
  }, [])

  // console.log(edges)
  // console.log(tableHeaders)

  return (
    <Fragment>
      <Header />
      <Main headerHeight={headerHeight}>
        <TableContainer>
          <TableWrapper>
            <Table>
              <Thead>
                <Tr>
                  {tableHeaders.map((header, index) => (
                    <Th key={`${header}-${index}`}>
                      {header === 'id' ? 'File' : header}
                    </Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {edges.map((edge, edgeIndex) => {
                  return (
                    <Fragment key={edgeIndex}>
                      <Tr
                        className={`tr-title tr-${
                          edgeIndex % 2 ? 'odd' : 'even'
                        }`}
                      >
                        <Td>{edge.node.displayName}</Td>
                        {tableHeaders.map((header, edgeIndex) => {
                          if (header === 'id') return null
                          return <Td key={edgeIndex}></Td>
                        })}
                      </Tr>
                      {edge.node.props.length ? (
                        edge.node.props.map((prop, index) => {
                          return (
                            <Tr
                              className={`tr-${edgeIndex % 2 ? 'odd' : 'even'}`}
                              key={index}
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
                        <Tr className={`tr-${edgeIndex % 2 ? 'odd' : 'even'}`}>
                          {tableHeaders.map((_, index) => (
                            <Td key={index}>{index === 0 ? '' : '-'}</Td>
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

        {/* <code>
          <pre>{JSON.stringify(allComponentMetadata, null, 2)}</pre>
        </code> */}
      </Main>
    </Fragment>
  )
}

export default PropShop
