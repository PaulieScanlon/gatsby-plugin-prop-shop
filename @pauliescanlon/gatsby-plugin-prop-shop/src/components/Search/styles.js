import { commonFocus } from '../common'

export const search = {
  alignItems: 'center',
  borderWidth: 0,
  borderColor: 'psTableBorder',
  borderStyle: 'solid',
  color: 'psTextLight',
  display: 'flex',
  fontFamily: 'psBody',
  fontSize: 1,
  p: 3,
  mb: 2,
  marginLeft: 'auto',
  marginRight: 'auto',
  ':focus-within': {
    ...commonFocus,
  },
}

export const input = {
  border: 'none',
  color: 'inherit',
  display: 'flex',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  flexBasis: '100%',
  ':focus': {
    outline: 'none',
  },
}

export const clearSearchButton = {
  display: 'flex',
  border: 'none',
  cursor: 'pointer',
  margin: 0,
  padding: 0,
  color: 'inherit',
  ':focus': {
    outline: 'none',
  },
}
