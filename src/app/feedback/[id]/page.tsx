'use client'

import React from 'react'
import { Paper } from '@mui/material'
import { routes } from '@/constants/routes'
import { redirect } from 'next/navigation'
import FeedbackDetails from '@/components/FeedbackDetails'
import { useCheckUnauthorized } from '@/utils/useCheckUnauthorized'
import { Box } from '@mui/material'
import {
  FeedbackDetailsMainGrid,
  FeedbackDetailsMainGridContainer,
} from '@/styles/tableStyles'

const Feedback = ({ params }: { params: { id: number } }) => {
  const authorization = useCheckUnauthorized()

  if (authorization.loading) {
    return null
  }

  if (!authorization.authorized) {
    redirect(routes.unauthorized)
  }

  return (
    <Box sx={FeedbackDetailsMainGridContainer}>
      <Paper key={`page-feedback-${params.id}`} sx={FeedbackDetailsMainGrid}>
        <FeedbackDetails feedbackId={params.id} />
      </Paper>
    </Box>
  )
}

export default Feedback
