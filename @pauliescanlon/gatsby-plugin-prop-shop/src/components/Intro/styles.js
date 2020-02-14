import { commonFocus, commonFont } from '../common'

export const intro = {
  alignItems: 'center',
  flexDirection: 'column',
  display: 'flex',
  mt: 4,
  mb: 4,
  textAlign: 'center',
}

export const introText = {
  ...commonFont,
  h1: {
    ...commonFont,
    // TODO might be a problem with the line-height here, check localhost blog
    color: 'psTextDark',
    fontSize: 2,
    fontWeight: 'light',
    lineHeight: 'heading',
    m: theme => `${theme.space[3]}px 0px`,
  },
  p: {
    ...commonFont,
    color: 'psTextDark',
  },
  a: {
    ...commonFont,
    color: 'psPrimary',
    ':focus': {
      outline: 'none',
      ...commonFocus,
    },
  },
}
