'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { Report, Team } from './types'
import { request } from '@/server/backend/types/request'
import ProjectTable from './ProjectTable'
import { apiUrls } from '@/constants/apiUrls'
import NoReportsView from './NoReportsView/NoReportsView'
import { Statuses } from './GiveReport/Fields/FormStatuses/types'
import { readOnlyStatus } from './utils'
import { ReadOnlyElement } from './ProjectTable/types'
import { tableContainer } from '@/styles/tableStyles'
import { TableContainer, Paper } from '@mui/material'
import { statusesValues, teamInitialValues } from './const'

interface Params {
  projectId: string
}

const ProjectDetails = ({ projectId }: Params) => {
  const [projectReport, setProjectReport] = useState<Report>()
  const [currentReportId, setCurrentReportId] = useState<number>()
  const [statuses, setStatuses] = useState<Statuses[]>([])
  const [team, setTeam] = useState<Team>(teamInitialValues)
  const [readOnlyElement, setReadOnlyElement] = useState<ReadOnlyElement>(null)

  const changeReadOnlyElement = (element: ReadOnlyElement) => {
    setReadOnlyElement(element)
  }

  const fetchTeam = useCallback(async () => {
    const { ok, response } = await request<Team>({
      url: apiUrls.projectTeam(projectId),
      method: 'GET',
    })

    if (ok && response) {
      setTeam(response)
    }
  }, [projectId])

  useEffect(() => {
    if (!readOnlyStatus(readOnlyElement)) setStatuses(statusesValues)
  }, [readOnlyElement])

  const fetchReport = useCallback(async () => {
    const { ok, response } = await request<Report>({
      url: apiUrls.projectNewestReport(projectId),
      method: 'GET',
    })

    if (ok && response) {
      setProjectReport(response)
      setCurrentReportId(response.id)
    }
  }, [projectId])

  useEffect(() => {
    fetchReport()
    fetchTeam()
  }, [fetchReport, fetchTeam])

  return (
    <TableContainer component={Paper} elevation={0} sx={tableContainer}>
      <>
        {projectReport && currentReportId ? (
          <ProjectTable
            projectId={projectId}
            fetchTeam={fetchTeam}
            fetchNewestReport={fetchReport}
            team={team}
            currentReportId={currentReportId}
            setCurrentReportId={setCurrentReportId}
            statuses={statuses}
            readOnlyElement={readOnlyElement}
            changeReadOnlyElement={changeReadOnlyElement}
          />
        ) : (
          <NoReportsView
            projectId={projectId}
            fetchNewestReport={fetchReport}
            fetchTeam={fetchTeam}
            team={team}
            projectReport={projectReport}
            statuses={statuses}
            readOnlyElement={readOnlyElement}
            changeReadOnlyElement={changeReadOnlyElement}
            setCurrentReportId={setCurrentReportId}
          />
        )}
      </>
    </TableContainer>
  )
}

export default ProjectDetails
