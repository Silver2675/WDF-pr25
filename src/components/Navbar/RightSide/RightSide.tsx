import React from 'react'
import { Links } from './Links'
import { UserContainer } from './UserComponent/UserContainer'
import { Box } from '@mui/material'
import { rightSideStyle } from '@/styles/navStyles'

export const RightSide = () => {
  return (
    <Box sx={rightSideStyle}>
      <Links />
      <UserContainer />
    </Box>
  )
}
