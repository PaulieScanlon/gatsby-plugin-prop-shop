import { commonFocus } from '../common'

const downArrow =
  'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 10l5 5 5-5z" fill="%237c7c7c" /></svg>'

export const filters = {
  alignItems: 'center',
  color: 'psTextLight',
  display: 'flex',
  fontFamily: 'psBody',
  fontSize: 1,
  marginLeft: 'auto',
  marginRight: 'auto',
  mb: 4,
}

export const select = {
  alignItems: 'center',
  appearance: 'none',
  borderRadius: 0,
  borderWidth: 0,
  borderColor: 'psTableBorder',
  borderStyle: 'solid',
  backgroundColor: 'psBackground',
  backgroundImage: `url('${downArrow}')`,
  backgroundPosition: 'center right',
  backgroundSize: 24,
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  flexBasis: '40%',
  pt: 2,
  pl: 3,
  pb: 2,
  pr: 3,
  color: 'psTextLight',
  fontFamily: ' inherit',
  fontSize: 'inherit',
  mr: 2,
  textTransform: 'capitalize',

  ':focus': {
    outline: 'none',
    ...commonFocus,
  },
}

export const checkbox = {}
