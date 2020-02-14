import { commonFocus, commonFont } from '../common'

export const showMoreButton = {
  ...commonFont,
  alignItems: 'center',
  backgroundColor: 'psBackground',
  border: 'none',
  borderRadius: 1,
  cursor: 'pointer',
  color: 'psPrimary',
  display: 'inline-flex',
  p: 2,
  ':focus': {
    outline: 'none',
    ...commonFocus,
  },
}

export const text = {
  ...commonFont,
  color: 'inherit',
  textTransform: 'capitalize',
}
