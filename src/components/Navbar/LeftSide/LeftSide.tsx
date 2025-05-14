import React from 'react'
import { Watchdog } from './Watchdog'
import { Box } from '@mui/material'
import { leftSideStyle } from '@/styles/navStyles'

export const LeftSide = () => {
  return (
    <Box sx={leftSideStyle}>
      <Watchdog />
    </Box>
  )
}
