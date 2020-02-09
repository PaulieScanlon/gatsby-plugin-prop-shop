/** @jsx jsx */
import { jsx } from 'theme-ui'

export const DefaultValue = ({ defaultValue }) => (
  <span>{defaultValue ? defaultValue.value : ''}</span>
)
