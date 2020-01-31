/** @jsx jsx */
import { jsx } from 'theme-ui'

import * as styles from './styles'

export const Required = ({ required }) => (
  <span sx={styles.required}>{required ? '*' : ''}</span>
)
