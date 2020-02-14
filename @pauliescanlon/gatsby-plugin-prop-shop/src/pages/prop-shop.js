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

  // TODO sort this mess out! a lot of those total calculations can be abstracted and composed

  const totalFiles = edges.length

  const totalFilesNoProps = edges
    .map(edge => edge)
    .filter(edge => edge.node.props.length >= 1).length

  const totalProps = edges
    .reduce((items, item) => {
      items = items || []
      items.push(item.node.props.length)
      return items
    }, [])
    .reduce((a, b) => a + b, 0)

  const totalPropsNoDescription = edges
    .map(edge => edge)
    .reduce((items, item) => {
      items = items || []
      items.push(item.node.props.filter(prop => !prop.description.text).length)
      return items
    }, [])
    .reduce((a, b) => a + b, 0)

  const totalPropsNoDefaultValue = edges
    .map(edge => edge)
    .reduce((items, item) => {
      items = items || []
      items.push(item.node.props.filter(prop => !prop.defaultValue).length)
      return items
    }, [])
    .reduce((a, b) => a + b, 0)

  const filterOptions = edges.reduce((items, item) => {
    if (item.node.props[0] && items.length < 1) {
      let propArray = Object.keys(item.node.props[0]).slice(1)
      items.push(DISPLAY_NAME, ...propArray)
    }
    return items
  }, [])

  const totalRequiredProps = edges
    .map(edge => edge)
    .reduce((items, item) => {
      items = items || []
      items.push(item.node.props.filter(prop => prop.required).length)
      return items
    }, [])
    .reduce((a, b) => a + b, 0)

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

  // console.log(propData)

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
                value={totalFiles - totalFilesNoProps}
                total={totalFiles}
                percent={getPercentageUtil(
                  totalFiles - totalFilesNoProps,
                  totalFiles
                )}
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
                value={totalPropsNoDescription}
                total={totalProps}
                percent={getPercentageUtil(totalPropsNoDescription, totalProps)}
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
                value={totalPropsNoDefaultValue}
                total={totalProps}
                percent={getPercentageUtil(
                  totalPropsNoDefaultValue,
                  totalProps
                )}
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
                value={totalRequiredProps}
                total={totalProps}
                percent={getPercentageUtil(totalRequiredProps, totalProps)}
              />
            </Box>
          </Flex>
        </Main>
      </ThemeProvider>
    </Fragment>
  )
}

export default PropShop
