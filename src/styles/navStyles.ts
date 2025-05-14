export const navStyle = {
  gridArea: 'header',
  backgroundColor: 'background.white',
  display: 'flex',
  justifyContent: 'space-between',
  color: 'font.black',
  height: 'auto',
  position: 'fixed',
  zIndex: 1000,
  width: '100vw',
  px: 1,
  paddingLeft: { sm: 3, xs: 0 },
}

export const leftSideStyle = {
  display: 'flex',
  alignItems: 'center',
}

export const rightSideStyle = {
  display: 'flex',
  alignItems: 'space-between',
  gap: { lg: 0, xs: 2 },
  pr: 6,
}

export const watchDogBox = {
  display: { sm: 'flex', xs: 'none' },
  alignItems: 'center',
  gap: { md: 3, xs: 1 },
}

export const logoCard = {
  display: 'flex',
  alignItems: 'center',
  gap: 2,
}

export const pageTitle = {
  fontSize: { md: 14, xs: 0 },
  lineHeight: '21px',
  ':hover': {
    cursor: 'pointer',
  },
}

export const tabsBox = {
  display: 'flex',
  pt: { md: 0, xs: 0 },
}

export const tabStyle = {
  width: { md: 'auto', sm: '30%', xs: '10%' },
  fontSize: { lg: 18, md: 16, xs: 13 },
  lineHeight: '56px',
  textTransform: 'none',
  px: 0,
  mr: { lg: 6, sm: 2, xs: 0 },
  color: 'black',
  textWrap: 'wrap',
}

export const userContainer = {
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
  ml: { sm: 0, xs: -3 },
}

export const iconStyle = {
  height: { sm: 80, xs: 60 },
  width: { sm: 80, xs: 60 },

  ':hover': {
    cursor: 'pointer',
  },
}
