/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui'
import { Fragment, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'

import { Header } from '../components/Header'
import { Intro } from '../components/Intro'

import { Main } from '../components/Main'
import { Search } from '../components/Search'

import { PropTable } from '../components/PropTable/PropTable'
import { Filters } from '../components/Filters'
import { StatPanel } from '../components/StatPanel/StatPanel'
import { ShowMore } from '../components/ShowMore/ShowMore'
import { propDataFilter } from '../utils/prop-data-filter'
import { defaultSearchFilter, DISPLAY_NAME } from '../const'

const getPercentageUtil = (value, total) => Math.round((value / total) * 100)

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
  const [isTableExpanded, setIsTableExpanded] = useState(false)

  const { edges } = data.allComponentMetadata

  const totals = edges.reduce((totals, edge) => {
    totals = {
      totalFiles: totals.totalFiles || 0,
      totalProps: totals.totalProps || 0,
      filesNoProps: totals.filesNoProps || 0,
      propsNoDescription: totals.propsNoDescription || 0,
      propsNoDefaultValue: totals.propsNoDefaultValue || 0,
      propsRequired: totals.propsRequired || 0,
    }

    totals.totalFiles++

    if (!edge.node.props.length >= 1) {
      totals.filesNoProps++
    }

    edge.node.props.filter(prop => {
      totals.totalProps++

      if (!prop.description.text) {
        totals.propsNoDescription++
      }
      if (!prop.defaultValue) {
        totals.propsNoDefaultValue++
      }
      if (prop.required) {
        totals.propsRequired++
      }
    })

    return {
      totalFiles: totals.totalFiles,
      totalProps: totals.totalProps,
      filesNoProps: totals.filesNoProps,
      propsNoDescription: totals.propsNoDescription,
      propsNoDefaultValue: totals.propsNoDefaultValue,
      propsRequired: totals.propsRequired,
    }
  }, {})

  const filterOptions = edges.reduce((items, item) => {
    if (item.node.props[0] && items.length < 1) {
      let propArray = Object.keys(item.node.props[0]).slice(1)
      items.push(DISPLAY_NAME, ...propArray)
    }
    return items
  }, [])

  const propData = edges
    .map(edge => {
      return {
        id: edge.node.id,
        displayName: edge.node.displayName,
        props:
          searchTerm.length > 0 && searchFilter !== DISPLAY_NAME
            ? edge.node.props.filter(prop =>
                propDataFilter(searchFilter, searchTerm, prop)
              )
            : edge.node.props,
      }
    })
    .filter(node => {
      if (searchFilter === DISPLAY_NAME) {
        return node.displayName.toLowerCase().includes(searchTerm.toLowerCase())
      }
      return searchTerm.length > 0
        ? node.props.some(prop =>
            propDataFilter(searchFilter, searchTerm, prop)
          )
        : node
    })

  // console.log(totals)
  // console.log(filterOptions)
  // console.log(propData)

  const {
    totalFiles,
    totalProps,
    filesNoProps,
    propsNoDescription,
    propsNoDefaultValue,
    propsRequired,
  } = totals

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Header />
        <Main>
          <Intro />
          <Search
            searchTerm={searchTerm}
            setSearchTerm={event =>
              setSearchTerm(event.currentTarget.value || '')
            }
            clearSearchTerm={() => setSearchTerm('')}
            searchFilter={searchFilter}
            setSearchFilter={event =>
              setSearchFilter(event.currentTarget.value)
            }
            filterOptions={filterOptions}
          />
          <Filters
            noPropsFilter={noPropsFilter}
            setNoPropsFilter={() => setNoPropsFilter(!noPropsFilter)}
          />

          <PropTable
            searchTerm={searchTerm}
            propData={propData}
            filterOptions={filterOptions}
            isTableExpanded={isTableExpanded}
          />
          {propData.length > 1 ? (
            <ShowMore
              isTableExpanded={isTableExpanded}
              setIsTableExpanded={() => setIsTableExpanded(!isTableExpanded)}
            />
          ) : null}

          <Flex
            sx={{
              flexWrap: 'wrap',
              mt: 4,
              ml: theme => `-${theme.space[2]}px`,
              mr: theme => `-${theme.space[2]}px`,
            }}
          >
            <Box
              sx={{
                mb: 4,
                width: ['100%', '50%', '50%', '25%'],
              }}
            >
              <StatPanel
                text={`files without\nproptypes`}
                value={filesNoProps}
                total={totalFiles}
                percent={getPercentageUtil(filesNoProps, totalFiles)}
              />
            </Box>
            <Box
              sx={{
                mb: 4,
                width: ['100%', '50%', '50%', '25%'],
              }}
            >
              <StatPanel
                text="props without descriptions"
                value={propsNoDescription}
                total={totalProps}
                percent={getPercentageUtil(propsNoDescription, totalProps)}
              />
            </Box>
            <Box
              sx={{
                mb: 4,
                width: ['100%', '50%', '50%', '25%'],
              }}
            >
              <StatPanel
                text="props without default values"
                value={propsNoDefaultValue}
                total={totalProps}
                percent={getPercentageUtil(propsNoDefaultValue, totalProps)}
              />
            </Box>
            <Box
              sx={{
                mb: 4,
                width: ['100%', '50%', '50%', '25%'],
              }}
            >
              <StatPanel
                text="props with required value"
                value={propsRequired}
                total={totalProps}
                percent={getPercentageUtil(propsRequired, totalProps)}
              />
            </Box>
          </Flex>
        </Main>
      </ThemeProvider>
    </Fragment>
  )
}

export default PropShop
