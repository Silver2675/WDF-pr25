'use client'

import AccountsDetails from '@/components/AccountDetails'
import { routes } from '@/constants/routes'
import { UserContext } from '@/context/UserContext'
import {
  FeedbackDetailsMainGrid,
  FeedbackDetailsMainGridContainer,
} from '@/styles/tableStyles'
import { useCheckUnauthorized } from '@/utils/useCheckUnauthorized'
import { Box, Paper } from '@mui/material'
import { redirect } from 'next/navigation'
import { useContext } from 'react'

const Account = ({ params }: { params: { id: number } }) => {
  const { groups } = useContext(UserContext)
  const authorization = useCheckUnauthorized()

  if (authorization.loading) {
    return null
  }

  if (!authorization.authorized || !groups?.includes('Manager')) {
    redirect(routes.unauthorized)
  }

  return (
    <Box sx={FeedbackDetailsMainGridContainer}>
      <Paper
        sx={{
          ...FeedbackDetailsMainGrid,
          gridTemplateColumns: '3fr 7fr',
          gridTemplateRows: '4.85fr 5.15fr',
          paddingBottom: 0,
        }}
      >
        <AccountsDetails accountId={params.id} />
      </Paper>
    </Box>
  )
}

export default Account
