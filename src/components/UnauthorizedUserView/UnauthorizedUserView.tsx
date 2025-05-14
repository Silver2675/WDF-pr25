import { pagePaper } from '@/styles/styles'
import { Box, Paper, TableContainer, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'

const UnauthorizedUserView = () => {
  return (
    <Paper
      sx={{
        ...pagePaper,
        paddingTop: { xs: '15vh', md: '15vh', lg: '15vh', xl: '8vh' },
      }}
    >
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          height: { xs: '76vh', md: '76vh', lg: '74vh', xl: '84vh' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderTop: 'solid',
          borderWidth: 1,
          borderColor: 'secondary.light',
          overflow: 'hidden',
          paddingTop: 0,
          flexDirection: 'column',
          textAlign: 'center',
          width: '95%',
        }}
      >
        <Box
          sx={{
            width: {
              xs: '225px',
              sm: '225px',
              md: '225px',
              lg: '250px',
              xl: '600px',
            },
            height: {
              xs: '225px',
              sm: '225px',
              md: '225px',
              lg: '250px',
              xl: '600px',
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
            mt: 2,
            fontSize: {
              xs: '19px',
              sm: '20px',
              md: '23px',
              lg: '33px',
              xl: '45px',
            },
            fontWeight: 1000,
          }}
        >
          401 Unauthorized
        </Typography>
        <Typography
          sx={{
            mt: 2,
            fontSize: {
              xs: '16px',
              sm: '17px',
              md: '18px',
              lg: '20px',
              xl: '25px',
            },
          }}
        >
          We could not validate your credentials. Please ask your manager to
          give you access to the platform.
        </Typography>
      </TableContainer>
    </Paper>
  )
}

export default UnauthorizedUserView
