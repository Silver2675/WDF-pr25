'use client'

import { Paper } from '@mui/material'
import { redirect } from 'next/navigation'
import EmployeesOverviews from '@/components/EmployeesOverviews/EmployeesOverviews'
import { tablePaper } from '@/styles/tableStyles'
import { routes } from '@/constants/routes'
import { useCheckUnauthorized } from '@/utils/useCheckUnauthorized'

const EmployeesOverview = () => {
  const authorization = useCheckUnauthorized()

  if (authorization.loading) {
    return null
  }

  if (!authorization.authorized) {
    redirect(routes.unauthorized)
  }

  return (
    <Paper sx={tablePaper}>
      <EmployeesOverviews />
    </Paper>
  )
}

export default EmployeesOverview
