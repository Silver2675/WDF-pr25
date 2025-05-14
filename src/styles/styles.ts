import { yellow } from '@mui/material/colors'

export const detailsCard = {
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '8px',
  border: 'solid',
  borderWidth: 1,
  borderColor: 'secondary.light',
  backgroundColor: 'background.white',
  justifyContent: 'space-between',
  height: '100%',
}

export const detailsTitle = {
  color: 'font.gray',
  fontSize: { md: 20, sm: 18, xs: 16 },
  padding: 2,
}

export const detailsInputLabel = {
  fontSize: 14,
  color: 'font.gray',
}

export const typographyBox = {
  borderBottom: 'solid',
  borderWidth: 1,
  borderBottomColor: 'secondary.light',
}

export const titleAndStatusBox = {
  borderBottom: 'solid',
  borderWidth: 1,
  borderBottomColor: 'secondary.light',
  display: 'flex',
  alignItems: 'center',
}

export const mainLayout = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export const pagePaper = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: { lg: 10, sm: 20, xs: 30 },
  minHeight: '100vh',
  backgroundColor: 'background.main',
  gap: 2,
}

export const boxContainer = { display: 'flex', gap: 1 }

export const dogBox = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: { md: 15, sm: 10, xs: 5 },
  marginTop: { lg: -20, sm: -10, xs: -15 },
  pb: 5,
}

export const dogImage = {
  height: { md: 450, sm: 300, xs: 250 },
  width: { md: 400, sm: 250, xs: 200 },
  mt: { md: -5, xs: -20 },
}

export const selectStandard = {
  padding: '4px 0px 5px',
  width: { lg: 160, md: 'auto', xs: 180 },
}

export const aboutCard = {
  padding: 6,
  width: '80vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  gap: 2,
  mt: { lg: 0, md: 2, xs: 5 },
  marginBottom: 5,
}

export const aboutDetails = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

export const ProfileGrid = {
  width: '100%',
  padding: '1%',
  display: 'grid',
  minHeight: 'auto',
  height: '100vh',
  pt: 12,
  backgroundColor: 'background.main',
  gridTemplateColumns: '1fr 1fr 2fr 1fr',
  gridTemplateRows: 'auto 1fr',
  columnGap: { md: '1.2%', lg: '1.2%', xl: '1%' },
  rowGap: { md: '2.5%', lg: '3%', xl: '2%' },
}

export const FeedbackDisplayContent = {
  px: 3,
  pt: 2,
  pb: 10,
  width: '100%',
  height: '100%',
  overflow: 'scroll',
  '&::-webkit-scrollbar': {
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

export const FeedbackDisplayGridElement = {
  height: '100%',
  gridColumnStart: '3',
  gridColumnEnd: '5',
  gridRowStart: '1',
  gridRowEnd: '4',
  overflow: 'hidden',
  '&::-webkit-scrollbar': {
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

export const EmployeeInfoGridElement = {
  pb: 1,
  position: 'relative',
  width: '100%',
  gridColumnStart: '1',
  gridColumnEnd: '3',
  gridRowStart: '1',
  gridRowEnd: '2',

  '&::-webkit-scrollbar': {
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

export const FeedbackListGridElement = {
  gridColumn: '1 / 3',
  gridRowStart: '2',
  gridRowEnd: '4',
  width: '100%',
  height: '100%',
  '&::-webkit-scrollbar': {
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

export const FeedbackListTable = {
  overflowY: 'auto',
  height: 'calc(100% - 48.5px)',
  '&::-webkit-scrollbar': {
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
