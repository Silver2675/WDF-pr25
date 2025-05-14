import { Typography } from '@mui/material'
import { useSession } from 'next-auth/react'

export const Initials = () => {
  const { data: session } = useSession()

  return (
    <Typography sx={{ fontWeight: 600, fontSize: { md: '18px', sm: '14px' } }}>
      {session?.user?.name
        ?.split(' ')
        .map((n) => n[0])
        .join('')}
    </Typography>
  )
}
