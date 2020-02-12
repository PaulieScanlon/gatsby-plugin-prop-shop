import { commonFocus } from '../common'

export const showMoreButton = {
  alignItems: 'center',
  backgroundColor: 'psBackground',
  border: 'none',
  borderRadius: 1,
  cursor: 'pointer',
  color: 'psPrimary',
  display: 'inline-flex',
  fontFamily: 'psBody',
  fontSize: 0,
  mb: 4,
  p: 2,
  ':focus': {
    outline: 'none',
    ...commonFocus,
  },
}

export const text = {
  textTransform: 'capitalize',
  pb: 1,
}
