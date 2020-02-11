/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

import * as styles from './styles'

import { Icon } from '../Icon'

const BACK_ARROW =
  'M12,1C6,1,1,6,1,12s5,11,11,11s11-4.9,11-11S18.1,1,12,1z M15.2,17.8l-1.3,1.3L7,12l7-7l1.3,1.3L9.4,12L15.2,17.8z'

export const Header = () => (
  <header sx={styles.header}>
    <Link to="/" sx={styles.backLink}>
      <Icon iconPath={BACK_ARROW} />
    </Link>
  </header>
)
