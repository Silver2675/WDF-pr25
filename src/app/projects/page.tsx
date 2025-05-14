'use client'

import React, { useContext } from 'react'
import { Paper } from '@mui/material'
import { tablePaper } from '@/styles/tableStyles'
import ProjectsOverviews from '@/components/ProjectsOverviews/ProjectsOverviews'
import MyProjects from '@/components/MyProjects/MyProjects'
import { routes } from '@/constants/routes'
import { redirect } from 'next/navigation'
import { useCheckUnauthorized } from '@/utils/useCheckUnauthorized'
import { UserContext } from '@/context/UserContext'

const ProjectsOverview = () => {
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

  const isManager = groups?.includes('Manager')
  const isReporter = groups?.includes('Reporters')

  if (isManager) {
    return (
      <Paper sx={tablePaper}>
        <ProjectsOverviews />
      </Paper>
    )
  }

  if (isReporter) {
    return <MyProjects />
  }

  redirect(routes.root)
}

export default ProjectsOverview
