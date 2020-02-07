/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Search } from '../components/Search'

import { PropTable } from '../components/PropTable/PropTable'

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

  const [searchItem, setSearchItem] = useState()
  const { edges } = data.allComponentMetadata

  const propData = edges.filter(
    edge =>
      !searchItem || edge.node.props.map(prop => prop.name).includes(searchItem)
  )

  const tableHeaders = edges
    .reduce((items, item) => {
      if (item.node.props[0] && items.length < 1) {
        items.push(...Object.keys(item.node.props[0]))
      }
      return items
    }, [])
    // replaces id with "file"
    .map((item, index) => (index === 0 ? 'file' : item))

  // console.log(tableHeaders)
  // console.log(searchItem)
  // console.log(edges)
  // console.log(propData)
  return (
    <Fragment>
      <Header />
      <Main>
        <Search
          searchItem={searchItem}
          setSearchItem={event => setSearchItem(event.currentTarget.value)}
          clearSearchItem={() => setSearchItem('')}
        />
        <PropTable propData={propData} tableHeaders={tableHeaders} />
      </Main>
    </Fragment>
  )
}

export default PropShop
