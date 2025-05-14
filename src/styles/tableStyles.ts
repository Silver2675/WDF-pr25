import { yellow } from '@mui/material/colors'

export const tableHead = {
  backgroundColor: 'background.light',
}

export const headRow = {
  borderTop: 'solid',
  borderBottom: 'solid',
  borderWidth: 1,
  borderColor: 'secondary.light',
}

export const headCells = {
  fontSize: 13,
  color: 'font.darkgray',
  fontWeight: 600,
  textWrap: 'nowrap',
  padding: 1,
}

export const accordionRow = {
  borderTop: 'solid',
  borderBottom: 'solid',
  borderWidth: 1,
  borderColor: 'secondary.light',
  transition: 'all 0.3s ease-in-out',
  border: 0,
  cursor: 'pointer',
}

export const accordionCells = {
  fontSize: 13,
  color: 'font.darkgray',
  padding: 1,
}

export const accordionIcon = {
  position: 'absolute',
  top: '50%',
  right: 1,
  transform: 'translateY(-50%)',
  color: yellow[600],
}

export const rowStyle = {
  cursor: 'pointer',
  textDecoration: 'none',
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  ':hover': {
    textDecoration: 'none',
  },
}

export const cellStyle = {
  fontSize: 13,
  paddingRight: 0,
  color: 'font.black',
  padding: 1,
}

export const buttonsCard = {
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: { md: 'noWrap', xs: 'wrap' },
  alignItems: 'right',
  gap: 2,
  marginLeft: 'auto',
  marginTop: 0,
}

export const tableNavLeft = {
  display: 'flex',
  justifyContent: { md: 'space-between', xs: 'flex-start' },
  flexWrap: { md: 'noWrap', xs: 'wrap' },
  alignItems: 'center',
  gap: { md: 4, sm: 2, xs: 1 },
  padding: { md: 1, xs: 0 },
}

export const basicInfoStyles = {
  fontSize: { md: 17, sm: 14, xs: 13 },
  borderBottom: 'solid',
  borderWidth: 1,
  borderBottomColor: 'secondary.main',
}

export const basicInfoEdit = {
  display: 'flex',
  flexWrap: { md: 'noWrap', xs: 'wrap' },
  gap: 2,
  width: { md: 650, xs: 'auto' },
  alignItems: 'center',
}

export const tableNav = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  alignItems: 'center',
  paddingX: 1.5,
  paddingY: 1,
}

export const tableContainer = {
  borderRadius: '8px',
  background: 'background.white',
  width: '98%',
  border: 'solid',
  borderWidth: 1,
  borderColor: 'secondary.light',
  mb: '24px',
  mt: { md: 0, sm: 15, xs: 10 },
}

export const tablePaper = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: { md: 12, xs: 5 },
  minHeight: '100vh',
  backgroundColor: 'background.main',
}

export const tableTitle = {
  fontSize: { md: 24, sm: 19, xs: 15 },
}

export const employeeInfoStyle = {
  whiteSpace: 'nowrap',
  textWrap: 'wrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  height: 36,
  fontSize: { md: 11, lg: 12, xl: 14 },
  paddingBottom: 0,
  paddingTop: 0,
  border: 0,
  minWidth: { md: 175, lg: 187, xl: 270 },
}

export const displayedAnswers = {
  fontSize: { md: 10, lg: 12, xl: 13 },
}

export const AnswersDisplayLoadingAnimationBox = {
  position: 'relative',
  gridColumnStart: '2',
  gridColumnEnd: '3',
  gridRowStart: '1',
  gridRowEnd: '3',
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  pb: '32px',
  pr: '32px',
}

export const EmployeeInfoLoadingAnimationBox = {
  position: 'relative',
  gridColumnStart: '1',
  gridColumnEnd: '2',
  gridRowStart: '1',
  gridRowEnd: '2',
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  pb: '32px',
  pr: '32px',
}

export const EmployeeInfoContent = {
  gridColumnStart: '1',
  gridColumnEnd: '2',
  gridRowStart: '1',
  gridRowEnd: '2',
  minHeight: '220px',
  width: 'auto%',
  height: 'auto',
  overflowX: 'hidden',
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

export const AnswersDisplayGrid = {
  position: 'relative',
  gridColumnStart: '2',
  gridColumnEnd: '3',
  gridRowStart: '1',
  gridRowEnd: '3',
}

export const AnswersDisplayContent = {
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

export const FeedbackDetailsMainGridContainer = {
  height: '100%',
  width: '100vw',
  display: 'flex',
  overflow: 'hidden',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'background.main',
}

export const FeedbackDetailsMainGrid = {
  width: '100%',
  padding: '1%',
  display: 'grid',
  minHeight: 'auto',
  height: '100vh',
  pt: 12,
  backgroundColor: 'background.main',
  gridTemplateColumns: '3fr 6fr',
  gridTemplateRows: {
    md: '3.8fr 4fr',
    lg: '3.6fr 4fr',
    xl: '2.5fr 7fr',
  },
  columnGap: { md: '1.2%', lg: '1.2%', xl: '1%' },
  rowGap: { md: '2.5%', lg: '3%', xl: '2%' },
}

export const FeedbackTeamMembersListLoadingAnimationBox = {
  position: 'relative',
  gridColumnStart: '1',
  gridColumnEnd: '2',
  gridRowStart: '2',
  gridRowEnd: '3',
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  pb: '32px',
  pr: '32px',
}

export const FeedbackTeamMembersListContent = {
  width: 'auto',
  gridColumnStart: '1',
  gridColumnEnd: '2',
  gridRowStart: '2',
  gridRowEnd: '3',
  height: 'auto',
  overflowX: 'hidden',
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

export const displayedNotes = {
  fontSize: { md: 10, lg: 12, xl: 13 },
}

export const FeedbackListDropdown = {
  position: 'relative',
  '&:hover > div': {
    display: 'inline',
  },
}

export const FeedbackListDropdownContent = {
  display: 'none',
  top: '0px',
  right: '0',
  transform: 'translateX(100%)',
  position: 'absolute',
  minWidth: '160px',
  ':hover': {},
}

export const leftCellStyle = {
  whiteSpace: 'nowrap',
  textWrap: 'wrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  height: 36,
  fontSize: { md: 11, lg: 12, xl: 14 },
  border: 0,
  color: 'gray',
  paddingLeft: 3,
  verticalAlign: 'top',
  width: 'auto',
  minWidth: '150px',
  paddingTop: 1.5,
  paddingBottom: 1.75,
}

export const rightCellStyle = {
  whiteSpace: 'nowrap',
  textWrap: 'wrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  height: 36,
  fontSize: { md: 11, lg: 12, xl: 14 },
  border: 0,
  verticalAlign: 'top',
  width: 'auto',
  minWidth: '175px',
  paddingTop: 1.5,
  paddingBottom: 1.75,
}
