'use client'

import { navStyle } from '@/styles/navStyles'
import { LeftSide } from './LeftSide/LeftSide'
import { RightSide } from './RightSide/RightSide'
import { Box } from '@mui/material'

const Navbar = () => {
  return (
    <Box sx={navStyle}>
      <LeftSide />
      <RightSide />
    </Box>
  )
}

export default Navbar
