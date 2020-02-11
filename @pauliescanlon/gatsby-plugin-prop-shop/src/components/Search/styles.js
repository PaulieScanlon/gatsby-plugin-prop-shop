import { commonFocus } from '../common'

const downArrow =
  'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="%2393cde8"/><path d="M0 0h24v24H0V0z" fill="none"/></svg>'

export const search = {
  alignItems: 'center',
  borderRadius: 1,
  backgroundColor: 'psWhite',
  boxShadow: 1,
  color: 'psTextLight',
  display: 'flex',
  fontFamily: 'psBody',
  fontSize: 0,
  pl: 3,
  pr: 3,
  mb: 2,
  ml: 'auto',
  mr: 'auto',
}

export const select = {
  alignItems: 'center',
  appearance: 'none',
  backgroundColor: 'psWhite',
  backgroundImage: `url('${downArrow}')`,
  backgroundPosition: 'center right',
  backgroundSize: 24,
  backgroundRepeat: 'no-repeat',
  borderRadius: 0,
  color: 'psBlack',
  border: 'none',
  display: 'flex',
  fontFamily: ' inherit',
  fontSize: 'inherit',
  fontWeight: 'bold',
  pt: 2,
  pl: 2,
  pb: 2,
  pr: 3,
  ml: 2,
  mr: 2,
  textTransform: 'capitalize',
  minWidth: '130px',
  ':focus': {
    outline: 'none',
    ...commonFocus,
  },
}

export const divider = {
  borderWidth: 0,
  borderStyle: 'solid',
  borderColor: 'psSearchDivider',
  height: '54px',
}

export const input = {
  border: 'none',
  borderRadius: 0,
  color: 'psTextDark',
  display: 'flex',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  flexBasis: '100%',
  p: 2,
  ml: 2,
  mr: 2,
  '::placeholder': {
    color: 'psTextLight',
  },
  ':focus': {
    outline: 'none',
    ...commonFocus,
  },
}

export const clearSearchButton = {
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
