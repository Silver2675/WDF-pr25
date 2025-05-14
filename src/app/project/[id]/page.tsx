'use client'

import React, { useContext } from 'react'
import { Paper } from '@mui/material'
import { tablePaper } from '@/styles/tableStyles'
import ProjectDetails from '@/components/ProjectDetails'
import { routes } from '@/constants/routes'
import { redirect } from 'next/navigation'
import { useCheckUnauthorized } from '@/utils/useCheckUnauthorized'
import { UserContext } from '@/context/UserContext'

const Project = ({ params }: { params: { id: string } }) => {
  const { groups } = useContext(UserContext)
  const authorization = useCheckUnauthorized()

  if (authorization.loading) {
    return null
  }

  if (
    !authorization.authorized ||
    (groups?.includes('FeedbackViewer') && groups.length === 1) ||
    (!groups?.includes('Manager') && !groups?.includes('Reporters'))
  ) {
    redirect(routes.unauthorized)
  }

  return (
    <Paper key={`page-project-${params.id}`} sx={tablePaper}>
      <ProjectDetails projectId={params.id} />
    </Paper>
  )
}

export default Project
