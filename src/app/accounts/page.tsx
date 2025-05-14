'use client'

import AccountsOverviews from '@/components/AccountsOverviews/AccountsOverviews'
import { routes } from '@/constants/routes'
import { UserContext } from '@/context/UserContext'
import { tablePaper } from '@/styles/tableStyles'
import { useCheckUnauthorized } from '@/utils/useCheckUnauthorized'
import { Paper } from '@mui/material'
import { redirect } from 'next/navigation'
import { useContext } from 'react'

const AccountsOverview = () => {
  const { groups } = useContext(UserContext)
  const authorization = useCheckUnauthorized()

  if (authorization.loading) {
    return null
  }

  if (!authorization.authorized || !groups?.includes('Manager')) {
    redirect(routes.unauthorized)
  }

  return (
    <Paper sx={tablePaper}>
      <AccountsOverviews />
    </Paper>
  )
}

export default AccountsOverview
