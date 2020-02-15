export const commonFocus = {
  transition: '.2s linear box-shadow',
  boxShadow: theme => `${theme.shadows[0]} ${theme.colors.psFocus}`,
}

export const commonFont = {
  color: 'psTextLight',
  fontFamily: 'psBody',
  fontSize: 0,
  fontWeight: 'regular',
  lineHeight: 'body',
}

export const page = {
  position: 'absolute',
  top: '0px',
  left: '0px',
  width: '100%',
  zIndex: 9999,
}
