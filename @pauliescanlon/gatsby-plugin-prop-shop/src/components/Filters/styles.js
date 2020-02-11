import { commonFocus } from '../common'

export const filters = {
  alignItems: 'center',
  color: 'psTextLight',
  display: 'flex',
  fontFamily: 'psBody',
  fontSize: 0,
  marginLeft: 'auto',
  marginRight: 'auto',
  mb: 4,
  borderBottomWidth: 0,
  borderBottomStyle: 'solid',
  borderBottomColor: 'psCommonDivider',
}

export const checkboxLabel = {
  alignItems: 'center',
  borderRadius: 1,
  cursor: 'pointer',
  color: 'psPrimary',
  display: 'flex',
  position: 'relative',
  p: 2,
  mb: 2,
  userSelect: 'none',
}

export const checkbox = {
  left: 0,
  opacity: 0,
  position: 'absolute',
  top: 0,
  '~ .checked-icon, ~ .un-checked-icon': {
    display: 'none',
    mr: 2,
    borderRadius: 1,
  },
  ':checked ~ .checked-icon': {
    display: 'block',
  },
  ':not(:checked) ~ .un-checked-icon': {
    display: 'block',
  },
  ':focus': {
    outline: 'none',
    '~ .checked-icon, ~ .un-checked-icon': {
      ...commonFocus,
    },
  },
}

export const labelText = {
  color: 'psTextDark',
}
