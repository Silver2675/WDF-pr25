const colors = {
  primaryLight: '#ffd244',
  primaryMain: '#fdd017',
  primaryDark: '#1d1d1d',
  grayLight: '#dbdbdf',
  grayMain: '#f4f4f4',
  white: '#ffffff',
  black: '#000000',
}

export const addButton = {
  borderRadius: 2,
  width: 'auto',
  boxShadow: 'none',
  background: 'primary.light',
  textTransform: 'none',
  fontSize: { md: 16, sm: 15, xs: 12 },
}

export const downloadReportPptxButton = {
  borderRadius: 2,
  width: 'auto',
  boxShadow: 'none',
  background: '#ff906b',
  textTransform: 'none',
  fontSize: { md: 16, sm: 15, xs: 12 },
  '&:hover': {
    background: '#d55331',
  },
  '&:active': {
    transform: 'translateY(4px)',
  },
}

export const downloadReportDocxButton = {
  borderRadius: 2,
  width: 'auto',
  boxShadow: 'none',
  background: '#40a7ec',
  textTransform: 'none',
  fontSize: { md: 16, sm: 15, xs: 12 },
  '&:hover': {
    background: '#195abe',
  },
  '&:active': {
    transform: 'translateY(4px)',
  },
}

export const yelllowFormButton = {
  borderRadius: 2,
  width: 100,
  boxShadow: 'none',
  background: 'primary.light',
  textTransform: 'none',
  fontSize: { md: 16, sm: 15, xs: 12 },
}

export const outlinedButtonGray = {
  color: 'font.black',
  borderColor: 'secondary.light',
  borderRadius: 2,
  width: 'auto',
  textTransform: 'none',
  fontSize: { md: 16, sm: 15, xs: 12 },
}

export const actionMenuItem = {
  color: 'font.black',
  fontSize: 16,
  textTransform: 'none',
  letterSpacing: 1,
}

export const activeButton = {
  width: '9.2rem',
  boxShadow: 'none',
  background: 'primary.light',
  textTransform: 'none',
  fontSize: { md: 16, sm: 15, xs: 12 },
}

export const inactiveButton = {
  width: '9.2rem',
  boxShadow: 'none',
  background: colors.grayMain,
  textTransform: 'none',
  fontSize: { md: 16, sm: 15, xs: 12 },
  '&:hover': {
    backgroundColor: colors.grayLight,
  },
}

export const buttonGroupStyle = {
  borderRadius: 2,
  overflow: 'hidden',
  boxShadow: 'none',
}

export const activeFeedbackButton = {
  width: '7rem',
  height: '2rem',
  boxShadow: 'none',
  background: colors.primaryLight,
  textTransform: 'none',
  fontSize: { md: 14, sm: 13, xs: 11 },
  padding: '2px 6px',
  color: 'black',
}

export const inactiveFeedbackButton = {
  width: '7rem',
  height: '2rem',
  boxShadow: 'none',
  background: colors.grayMain,
  textTransform: 'none',
  fontSize: { md: 14, sm: 13, xs: 11 },
  padding: '2px 6px',
  '&:hover': {
    backgroundColor: colors.grayLight,
  },
  color: 'black',
}
