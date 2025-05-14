'use client'

import { Box, CircularProgress } from '@mui/material'
import { useSession } from 'next-auth/react'
import Navbar from '../Navbar/Navbar'
import { mainLayout } from '@/styles/styles'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession()

  return (
    <>
      {session === undefined && (
        <Box sx={mainLayout}>
          <CircularProgress size={64} />
        </Box>
      )}
      {session && (
        <>
          <Navbar />
          {children}
        </>
      )}
    </>
  )
}

export default MainLayout
