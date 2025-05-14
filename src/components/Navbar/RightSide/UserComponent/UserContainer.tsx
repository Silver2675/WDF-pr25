import React from 'react'
import { UserAvatar } from './Avatar'
import { User } from './User'
import { Box } from '@mui/material'
import { userContainer } from '@/styles/navStyles'

export const UserContainer = () => {
  return (
    <Box sx={userContainer}>
      <UserAvatar />
      <User />
    </Box>
  )
}
