/** @jsx jsx */
import { jsx } from 'theme-ui'

import * as styles from './styles'

export const PropType = ({ type }) => {
  const { name, value } = type

  return (
    <span sx={styles.type}>{`${name} ${value ? `(${value.name})` : ''}`}</span>
  )
}
