import { dogBox, dogImage } from '@/styles/styles'
import { Box, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'

const NoReportsDog = () => {
  return (
    <Box sx={dogBox}>
      <Box sx={{ ...dogImage, mt: 20 }}>
        <Image
          src="/dog.png"
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
      <Typography sx={{ px: 2 }} variant="h5">
        No report has been given so far. Please input your project information.
      </Typography>
    </Box>
  )
}

export default NoReportsDog
