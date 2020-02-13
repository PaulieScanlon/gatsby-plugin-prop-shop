/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

import * as styles from './styles'

import { Icon } from '../Icon'

const BACK_ARROW = 'M17,20.4l-1.9,1.9L5.2,12L15.3,1.9l1.9,1.9L8.6,12L17,20.4z'
const GIT_HUB =
  'M12,0.3c-6.6,0-12,5.4-12,12c0,5.3,3.4,9.8,8.2,11.4C8.8,23.8,9,23.4,9,23.1c0-0.3,0-1,0-2c-3.3,0.7-4-1.6-4-1.6c-0.5-1.4-1.3-1.8-1.3-1.8C2.5,17,3.7,17,3.7,17c1.2,0.1,1.8,1.2,1.8,1.2c1.1,1.8,2.8,1.3,3.5,1c0.1-0.8,0.4-1.3,0.8-1.6c-2.7-0.3-5.5-1.3-5.5-5.9c0-1.3,0.5-2.4,1.2-3.2C5.5,8.1,5,6.9,5.7,5.3c0,0,1-0.3,3.3,1.2c1-0.3,2-0.4,3-0.4c1,0,2,0.1,3,0.4c2.3-1.6,3.3-1.2,3.3-1.2c0.7,1.7,0.2,2.9,0.1,3.2c0.8,0.8,1.2,1.9,1.2,3.2c0,4.6-2.8,5.6-5.5,5.9c0.4,0.4,0.8,1.1,0.8,2.2c0,1.6,0,2.9,0,3.3c0,0.3,0.2,0.7,0.8,0.6c4.8-1.6,8.2-6.1,8.2-11.4C24,5.7,18.6,0.3,12,0.3z'

export const Header = () => (
  <header sx={styles.header}>
    <Link to="/" sx={styles.linkIcon}>
      <Icon iconPath={BACK_ARROW} />
    </Link>
    <a
      sx={styles.linkIcon}
      href="https://github.com/PaulieScanlon/gatsby-plugin-prop-shop"
      target="_blank"
    >
      <Icon iconPath={GIT_HUB} iconSize={26} />
    </a>
  </header>
)
