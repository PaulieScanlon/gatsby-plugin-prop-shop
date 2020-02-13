export const tableContainer = {
  backgroundColor: 'psWhite',
  borderRadius: 1,
  boxShadow: 1,
  overflow: 'hidden',
  mb: 2,
}

export const tableWrapper = {
  width: '100%',
  height: '100%',
  overflow: 'auto',
}

export const table = {
  borderCollapse: 'separate',
  borderSpacing: 0,
  color: 'psTextDark',
  fontFamily: 'psBody',
  fontSize: 0,
  textAlign: 'left',
  lineHeight: 'body',
  margin: 0,
  padding: 0,
  width: '100%',
  'th, td': {
    padding: 3,
  },
}

export const thead = {}

export const tbody = {
  '.tr-even': {
    color: 'psTextMedium',
    backgroundColor: 'psTrEvenBackground',
    'td:first-of-type': {
      backgroundColor: 'psTrEvenBackground',
    },
  },
  '.tr-odd': {
    backgroundColor: 'psTrOddBackground',
    'td:first-of-type': {
      backgroundColor: 'psTrOddBackground',
    },
  },
}

export const tr = {
  'td:first-of-type, th:first-of-type': {
    borderRightStyle: 'solid',
    borderRightWidth: 0,
    fontWeight: 'bold',
    left: 0,
    position: 'sticky',
    zIndex: 2,
  },
  'th:first-of-type': {
    zIndex: 3,
    borderRightColor: 'psTableHeadDivider',
  },
  'td:first-of-type': {
    borderRightColor: 'psTableBodyDivider',
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
  borderBottom: 'none',
}
