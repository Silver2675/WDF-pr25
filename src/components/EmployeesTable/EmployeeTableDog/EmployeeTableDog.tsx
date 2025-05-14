import { mainLayout } from '@/styles/styles'
import { Box, CircularProgress, TableCell, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface Props {
  loading: boolean
}

const EmployeesTableDog = ({ loading }: Props) => {
  if (loading) {
    return (
      <Box sx={mainLayout}>
        <CircularProgress size={64} />
      </Box>
    )
  }

  const message = `Sorry, it seems there are no employees to display!`

  return (
    <TableCell
      colSpan={7}
      align="center"
      sx={{
        height: { xs: '40vh', md: '57vh', lg: '58vh', xl: '76vh' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTop: 'solid',
        borderWidth: 1,
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
              xs: '150px',
              sm: '175px',
              md: '225px',
              lg: '250px',
              xl: '500px',
            },
            height: {
              xs: '150px',
              sm: '175px',
              md: '225px',
              lg: '250px',
              xl: '500px',
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
            mt: 2,
            fontSize: {
              xs: '13px',
              sm: '13px',
              md: '15px',
              lg: '15px',
              xl: '25px',
            },
          }}
        >
          {message}
        </Typography>
        <Typography
          sx={{
            px: 2,
            fontSize: {
              xs: '13px',
              sm: '13px',
              md: '15px',
              lg: '15px',
              xl: '25px',
            },
          }}
        >
          If you feel that something is wrong, please contact your leader.
        </Typography>
      </Box>
    </TableCell>
  )
}

export default EmployeesTableDog
