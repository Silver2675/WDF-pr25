import React from 'react'
import { useSession } from 'next-auth/react'
import { Typography } from '@mui/material'

export const User = () => {
  const session = useSession()

  if (session.status === 'authenticated') {
    const userData = [session.data].map((users) => users.user)

    return (
      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 600,
          display: { md: 'flex', xs: 'none' },
        }}
      >
        {userData.map((user) => user?.name)}
      </Typography>
    )
  }
}
