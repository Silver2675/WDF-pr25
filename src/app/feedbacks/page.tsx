'use client'

import { Paper } from '@mui/material'
import { redirect } from 'next/navigation'
import FeedbacksOverviews from '@/components/FeedbacksOverviews/FeedbacksOverviews'
import { tablePaper } from '@/styles/tableStyles'
import { routes } from '@/constants/routes'
import { useCheckUnauthorized } from '@/utils/useCheckUnauthorized'

const FeedbacksOverview = () => {
  const authorization = useCheckUnauthorized()

  if (authorization.loading) {
    return null
  }

  if (!authorization.authorized) {
    redirect(routes.unauthorized)
  }

  return (
    <Paper sx={tablePaper}>
      <FeedbacksOverviews />
    </Paper>
  )
}

export default FeedbacksOverview
