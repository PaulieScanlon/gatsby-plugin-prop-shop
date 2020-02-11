/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

import * as styles from './styles'

import { Icon } from '../Icon'

const BACK_ARROW = 'M17,20.4l-1.9,1.9L5.2,12L15.3,1.9l1.9,1.9L8.6,12L17,20.4z'

export const Header = () => (
  <header sx={styles.header}>
    <Link to="/" sx={styles.backLink}>
      <Icon iconPath={BACK_ARROW} />
    </Link>
  </header>
)
