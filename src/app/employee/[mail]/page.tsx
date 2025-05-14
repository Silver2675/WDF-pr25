'use client'

import React from 'react'
import { Paper } from '@mui/material'
import { routes } from '@/constants/routes'
import { redirect } from 'next/navigation'
import EmployeeDetails from '@/components/EmployeeDetails/EmployeeDetails'
import { useCheckUnauthorized } from '@/utils/useCheckUnauthorized'
import { Box } from '@mui/material'
import { FeedbackDetailsMainGridContainer } from '@/styles/tableStyles'
import { ProfileGrid } from '@/styles/styles'

const EmployeeProfile = ({ params }: { params: { mail: string } }) => {
  const authorization = useCheckUnauthorized()

  if (authorization.loading) {
    return null
  }

  if (!authorization.authorized) {
    redirect(routes.unauthorized)
  }

  return (
    <Box sx={FeedbackDetailsMainGridContainer}>
      <Paper key={`page-employee-${params.mail}`} sx={ProfileGrid}>
        <EmployeeDetails employeeId={params.mail} />
      </Paper>
    </Box>
  )
}

export default EmployeeProfile
