import { commonFocus } from '../common'

export const header = {
  alignItems: 'center',
  backgroundColor: 'psWhite',
  boxShadow: 1,
  position: 'fixed',
  padding: 3,
  width: '100%',
  zIndex: 999,
}

export const backLink = {
  display: 'inline-flex',
  alignItems: 'center',
  border: 'none',
  borderRadius: 1,
  cursor: 'pointer',
  color: 'psPrimary',
  m: 0,
  p: 0,
  ':focus': {
    outline: 'none',
    ...commonFocus,
  },
}
