import { Components, Theme } from '@mui/material'

const overrides = (): Components<Omit<Theme, 'components'>> => ({
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        '&.Mui-selected': {
          color: 'black',
          fontWeight: 600,
        },
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      // eslint-disable-next-line
      // @ts-ignore - mui typing problem
      root: {
        '&.Mui-selected': {
          color: 'black',
          fontWeight: 600,
        },
      },
      select: {
        padding: '9px 24px',
      },
      standard: {
        padding: '0px',
      },
    },
  },
  MuiMenu: {
    styleOverrides: {
      paper: {
        borderRadius: 0,
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        padding: '8px 4px',
        height: 'auto',
      },
      label: {
        fontSize: 12,
        lineHeight: 1,
      },
    },
  },
})

export default overrides
