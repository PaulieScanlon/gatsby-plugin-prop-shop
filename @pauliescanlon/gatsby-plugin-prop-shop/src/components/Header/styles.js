import { commonFocus } from '../common'

export const header = {
  alignItems: 'center',
  backgroundColor: 'psWhite',
  boxShadow: 1,
  display: 'flex',
  justifyContent: 'space-between',
  lineHeight: 'body',
  position: 'fixed',
  padding: 3,
  width: '100%',
  zIndex: 999,
}

export const linkIcon = {
  display: 'inline-flex',
  alignItems: 'center',
  border: 'none',
  borderRadius: 1,
  cursor: 'pointer',
  color: 'psPrimary',
  m: 0,
  p: 1,
  ':focus': {
    outline: 'none',
    ...commonFocus,
  },
}
