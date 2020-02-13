/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export const SEO = ({ lang }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            url
            ogImage
          }
        }
      }
    `
  )

  const {
    title,
    description,
    author,
    keywords,
    url,
    ogImage,
  } = site.siteMetadata

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:image`,
          content: `${url}/images/${ogImage}`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `twitter:image`,
          content: `${url}/images/${ogImage}`,
        },
        {
          name: `keywords`,
          content: keywords.join(', '),
        },
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  title: ``,
  description: ``,
  author: ``,
  keywords: [],
}

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string,
  /** The quick brown fox jimps over the lazy dog */
  description: PropTypes.string,
  author: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
}
