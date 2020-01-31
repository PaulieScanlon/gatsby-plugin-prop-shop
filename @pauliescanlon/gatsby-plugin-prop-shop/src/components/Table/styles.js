export const tableContainer = {
  outlineColor: 'psTableBorder',
  outlineStyle: 'solid',
  outlineWidth: 1,
  marginTop: 5,
  height: 600,
}

export const tableWrapper = {
  width: '100%',
  height: '100%',
  overflow: 'auto',
}

export const table = {
  borderCollapse: 'separate',
  borderSpacing: 0,
  color: 'psTextPrimary',
  fontFamily: 'psBody',
  fontSize: 1,
  textAlign: 'left',
  padding: 0,
  margin: 0,
  width: '100%',
  'th, td': {
    padding: 3,
  },
}

export const thead = {}

export const tbody = {
  '.tr-even': {
    color: 'psTextLight',
    backgroundColor: 'psBackground',
    'td:first-of-type': {
      backgroundColor: 'psBackground',
    },
  },
  '.tr-odd': {
    color: 'psTextDark',
    backgroundColor: 'psTrBackground',
    'td:first-of-type': {
      backgroundColor: 'psTrBackground',
    },
  },
}

export const tr = {
  'td:first-of-type, th:first-of-type': {
    borderRightStyle: 'solid',
    borderRightWidth: 1,
    left: 0,
    position: 'sticky',
    zIndex: 2,
  },
  'th:first-of-type': {
    zIndex: 3,
    borderRightColor: 'psTheadBorder',
  },
  'td:first-of-type': {
    borderRightColor: 'psTableBorder',
  },
}

export const th = {
  backgroundColor: 'psTheadBackground',
  color: 'psBackground',
  fontWeight: 500,
  minWidth: 'auto',
  position: 'sticky',
  textTransform: 'capitalize',
  top: 0,
  width: 'auto',
  whiteSpace: 'nowrap',
  zIndex: 1,
}

export const td = {
  whiteSpace: 'nowrap',
}
