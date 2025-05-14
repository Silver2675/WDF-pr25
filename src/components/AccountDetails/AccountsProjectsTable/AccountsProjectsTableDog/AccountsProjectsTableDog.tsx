import { mainLayout } from '@/styles/styles'
import { Box, CircularProgress, TableCell, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface Props {
  loading: boolean
}

const AccountsProjectsTableDog = ({ loading }: Props) => {
  if (loading) {
    return (
      <Box sx={mainLayout}>
        <CircularProgress size={64} />
      </Box>
    )
  }

  const message = `Sorry, it seems there are no projects to display!`

  return (
    <TableCell
      colSpan={7}
      align="center"
      sx={{
        height: { xs: '20vh', md: '28.5vh', lg: '29vh', xl: '36vh' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTop: 'solid',
        borderWidth: 1,
        borderBottomWidth: 0,
        borderColor: 'secondary.light',
        overflow: 'hidden',
        paddingTop: 0,
      }}
    >
      <Box
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          display: 'flex',
          width: '100%',
        }}
      >
        <Box
          sx={{
            width: {
              xs: '50px',
              sm: '52.5px',
              md: '87.5px',
              lg: '100px',
              xl: '225px',
            },
            height: {
              xs: '50px',
              sm: '52.5px',
              md: '87.5px',
              lg: '100px',
              xl: '225px',
            },
            position: 'relative',
          }}
        >
          <Image
            src="/dog.png"
            layout="fill"
            objectFit="contain"
            alt="yellow dog"
          />
        </Box>
        <Typography
          sx={{
            px: 2,
            mt: 0,
            fontSize: {
              xs: '11px',
              sm: '11px',
              md: '13px',
              lg: '13px',
              xl: '19px',
            },
          }}
        >
          {message}
        </Typography>
        <Typography
          sx={{
            px: 1,
            fontSize: {
              xs: '11px',
              sm: '11px',
              md: '13px',
              lg: '13px',
              xl: '19px',
            },
          }}
        >
          If you feel that something is wrong, please contact your leader.
        </Typography>
      </Box>
    </TableCell>
  )
}

export default AccountsProjectsTableDog
