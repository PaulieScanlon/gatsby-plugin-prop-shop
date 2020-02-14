import { commonFont } from '../common'
export const donut = {
  position: 'relative',
}

export const text = {
  ...commonFont,
  // special case for svg text font size
  fontSize: ['6px', '8px'],
  fill: 'psTextLight',
}
