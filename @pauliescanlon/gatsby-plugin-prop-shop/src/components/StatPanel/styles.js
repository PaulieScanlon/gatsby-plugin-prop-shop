import { commonFont } from '../common'

export const statPanel = {
  boxShadow: 1,
  backgroundColor: 'psWhite',
  borderRadius: 1,
  display: 'flex',
  justifyContent: 'space-between',
  height: '100%',
  p: 3,
  ml: 2,
  mr: 2,
}

export const content = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flexBasis: '70%',
}

export const chart = {
  display: 'flex',
  flexBasis: '30%',
}

export const text = {
  ...commonFont,
  textTransform: 'uppercase',
  mb: 2,
}

export const number = {
  ...commonFont,
  color: 'psBlack',
  fontSize: 2,
}

export const total = {
  ...commonFont,
  fontSize: 1,
}
