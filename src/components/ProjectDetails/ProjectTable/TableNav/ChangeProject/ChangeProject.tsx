import { buttonsCard } from '@/styles/tableStyles'
import { Card } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import PrevProject from './PrevProject'
import NextProject from './NextProject'
import { request } from '@/server/backend/types/request'
import { Overview } from '@/components/ProjectsOverviews/types'
import { apiUrls } from '@/constants/apiUrls'

interface Props {
  projectId: string
}

const ChangeProject = ({ projectId }: Props) => {
  const [overviews, setOverviews] = useState<Overview[]>([])

  const fetchData = useCallback(async () => {
    const { ok, response } = await request<Overview[]>({
      url: apiUrls.projectsOverview,
      method: 'POST',
      body: {},
    })
    if (ok && response) {
      setOverviews(response)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <Card
      elevation={0}
      sx={{
        ...buttonsCard,
        gap: 0,
        padding: 0,
        mr: -2,
        flexWrap: 'wrap',
        minWidth: 90,
        marginLeft: 0,
      }}
    >
      <PrevProject projectId={projectId} overviews={overviews} />
      <NextProject projectId={projectId} overviews={overviews} />
    </Card>
  )
}

export default ChangeProject
