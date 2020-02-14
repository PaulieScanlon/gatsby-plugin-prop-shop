/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1 sx={{ color: 'primary' }}>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <h2 sx={{ color: 'primary', mb: 0 }}>PropShop</h2>
    <p sx={{ display: 'inline-flex' }}>
      To see all PropTypes used in the plugin visit the &nbsp;
    </p>
    <Link sx={{ display: 'inline-block' }} to="/prop-shop/">
      PropShop
    </Link>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
