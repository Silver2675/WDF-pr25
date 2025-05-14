import { yellow } from '@mui/material/colors'

export const formInputLabel = {
  color: 'font.gray',
  marginBottom: '-4px',
  paddingTop: 1,
  fontSize: 13,
}

export const datePicker = {
  padding: 0,
  marginTop: 0,
  button: {
    marginRight: 0,
    mb: 1,
  },
}

export const formErrors = { color: 'error.main', fontSize: 12, mt: 0.25 }

export const noteFormPaper = {
  width: { lg: '58%', md: '60vw', xs: '80vw' },
  height: '100%',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  borderRadius: '8px',
  py: 4,
  px: { md: 5, xs: 2 },
  gap: 1,
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    height: 500,
    width: '8px',
    backgroundColor: 'background.main',
    borderRadius: '8px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: yellow[600],
    borderRadius: '8px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#fdd017',
  },
}

export const formPaper = {
  width: { lg: '58%', md: '60vw', xs: '80vw' },
  height: '100%',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  borderRadius: '8px',
  py: 4,
  px: { md: 5, xs: 2 },
  gap: 1,
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    height: 500,
    width: '8px',
    backgroundColor: 'background.main',
    borderRadius: '8px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: yellow[600],
    borderRadius: '8px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#fdd017',
  },
}

export const formTitle = {
  alignItems: 'center',
  fontSize: { md: 30, xs: 20 },
  fontWeight: 700,
}

export const formBox = {
  height: 'auto',
  width: { md: '50vw', xs: '60vw' },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: { md: 'space-between', xs: 'flex-start' },
  margin: 'auto',
  gap: 10,
}

export const fieldsBox = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'space-evenly',
  padding: 1,
}

export const buttonsBox = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: {
    xl: 'flex-end',
    lg: 'flex-end',
    md: 'flex-end',
    xs: 'space-evenly',
  },
  gap: 2,
  pb: 1,
  paddingRight: 1.1,
  paddingTop: 0,
}

export const searchBox = {
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'start',
  gap: 2,
  paddingX: 1,
  paddingY: 1.5,
  flexWrap: 'wrap',
}

export const searchFiltersBox = {
  alignItems: 'center',
  justifyContent: 'start',
  gap: 1,
  padding: 1,
  display: 'flex',
  flexWrap: 'wrap',
  minHeight: 'auto',
}
