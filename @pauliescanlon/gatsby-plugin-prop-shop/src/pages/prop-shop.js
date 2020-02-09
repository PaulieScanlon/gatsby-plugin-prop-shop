/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Search } from '../components/Search'

import { PropTable } from '../components/PropTable/PropTable'
import { Filters } from '../components/Filters'

const defaultSearchFilter = 'name'
const DISPLAY_NAME = 'file'

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

  const [searchTerm, setSearchTerm] = useState('')
  const [searchFilter, setSearchFilter] = useState(defaultSearchFilter)
  const [noPropsFilter, setNoPropsFilter] = useState(false)

  const { edges } = data.allComponentMetadata

  const filterOptions = edges.reduce((items, item) => {
    if (item.node.props[0] && items.length < 1) {
      let propArray = Object.keys(item.node.props[0]).slice(1)
      items.push(DISPLAY_NAME, ...propArray)
    }
    return items
  }, [])

  const propData = edges
    .map(edge => edge)
    .filter(edge => {
      // TODO abstract this filter so it can be re-used in the table
      if (searchFilter === DISPLAY_NAME) {
        return edge.node.displayName
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      }
      return edge.node.props.some(prop => {
        switch (searchFilter) {
          case 'id': {
            return prop.id.toLowerCase().includes(searchTerm.toLowerCase())
          }

          case 'name': {
            return prop.name.toLowerCase().includes(searchTerm.toLowerCase())
          }

          case 'type': {
            return prop.type.name
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          }

          case 'required': {
            return prop.required.toString().includes(searchTerm.toLowerCase())
          }

          case 'defaultValue': {
            return (
              prop.defaultValue &&
              prop.defaultValue.value
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            )
          }
          case 'description': {
            return prop.description.text
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          }

          default: //
        }
      })
    })

  const edgeData = edges
    .map(edge => edge)
    .filter(edge => (noPropsFilter ? edge.node.props.length >= 1 : edge))

  // console.log(noPropsFilter)
  // console.log(edgeData)
  // console.log(propData)

  return (
    <Fragment>
      <Header />
      <Main>
        <Search
          searchTerm={searchTerm}
          setSearchTerm={event =>
            setSearchTerm(event.currentTarget.value || '')
          }
          clearSearchTerm={() => setSearchTerm('')}
          searchFilter={searchFilter}
        />
        <Filters
          searchFilter={searchFilter}
          setSearchFilter={event => setSearchFilter(event.currentTarget.value)}
          filterOptions={filterOptions}
          noPropsFilter={noPropsFilter}
          setNoPropsFilter={() => setNoPropsFilter(!noPropsFilter)}
        />

        <PropTable
          searchTerm={searchTerm}
          propData={searchTerm ? propData : edgeData}
          filterOptions={filterOptions}
        />
      </Main>
    </Fragment>
  )
}

export default PropShop
