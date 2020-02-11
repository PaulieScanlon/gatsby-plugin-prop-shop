/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Logo } from '../Logo'

import * as styles from './styles'

export const Intro = () => (
  <section sx={styles.intro}>
    <Logo />
    <div sx={styles.introText}>
      <h1>PropShop</h1>
      <p>
        PropShop provides an holistic view of all defined PropTypes in your
        project.
        <br />
        <a
          href="http://www.github.com/pauliescanlon/gatsby-plugin-prop-shop"
          target="_blank"
        >
          https://github.com/PaulieScanlon/gatsby-plugin-prop-shop
        </a>
      </p>
    </div>
  </section>
)
