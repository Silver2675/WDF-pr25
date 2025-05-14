import { dogImage, pagePaper } from '@/styles/styles'
import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import unauthorizedDogImage from '../../../public/dog.png'

const NoAccessView = () => {
  return (
    <Paper sx={pagePaper}>
      <Box sx={dogImage}>
        <Image
          src={unauthorizedDogImage}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          width={400}
          height={450}
          alt="yellow dog"
        />
      </Box>

      <Typography
        sx={{
          px: 2,
          fontSize: { lg: 30, md: 25, sm: 50, xs: 30 },
          fontWeight: 1000,
        }}
      >
        You don`t have access to these resources
      </Typography>
      <Typography sx={{ fontSize: { lg: 22, md: 20, sm: 25, xs: 20 } }}>
        Seems like your account does not have to role needed to access this
        page. Please ask your manager to give you the needed role.
      </Typography>
    </Paper>
  )
}

export default NoAccessView
