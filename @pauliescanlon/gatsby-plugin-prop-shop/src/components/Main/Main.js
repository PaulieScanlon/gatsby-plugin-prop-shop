/** @jsx jsx */
import { jsx } from 'theme-ui'

import * as styles from './styles'

export const Main = ({ children }) => (
  <main sx={styles.main}>
    <div sx={styles.child}>{children}</div>
  </main>
)
