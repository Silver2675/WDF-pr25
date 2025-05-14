'use client'
import { Box, CircularProgress } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import { BasicInformation, Report } from '../types'
import Details from '../Details'
import TableNav from './TableNav'
import { ReportDates } from '../Details/DetailsRow/types'
import { apiUrls } from '@/constants/apiUrls'
import { request } from '@/server/backend/types/request'
import { ProjectTableProps } from './types'
import { initialValues } from '../const'
import { mainLayout } from '@/styles/styles'

const ProjectTable = ({
  projectId,
  fetchNewestReport,
  fetchTeam,
  currentReportId,
  setCurrentReportId,
  statuses,
  readOnlyElement,
  changeReadOnlyElement,
  team,
}: ProjectTableProps) => {
  const [projectDetails, setProjectDetails] = useState<Report>()
  const [reportsDates, setReportsDates] = useState<ReportDates[]>([])
  const [information, setInformation] =
    useState<BasicInformation>(initialValues)
  const [isInformationLoading, setIsInformationLoading] = useState(true)

  const fetchInformation = useCallback(async () => {
    const { ok, response } = await request<BasicInformation>({
      url: apiUrls.projectOverview(projectId),
      method: 'GET',
    })

    if (ok && response) {
      setInformation(response)
    }
    setIsInformationLoading(false)
  }, [projectId])

  useEffect(() => {
    fetchInformation()
  }, [fetchInformation])

  const fetchReportsDates = useCallback(async () => {
    const { ok, response } = await request<ReportDates[]>({
      url: apiUrls.projectReportsDates(projectId),
      method: 'GET',
    })

    if (ok && response) {
      setReportsDates(response)
    }
  }, [projectId])

  useEffect(() => {
    fetchReportsDates()
  }, [fetchReportsDates])

  const fetchReport = useCallback(
    async (id?: number) => {
      const { ok, response } = await request<Report>({
        url: apiUrls.report(id),
        method: 'GET',
      })

      if (ok && response) {
        setProjectDetails(response)
        setCurrentReportId(response.id)
      }
    },
    [setCurrentReportId]
  )

  useEffect(() => {
    if (currentReportId !== projectDetails?.id) {
      fetchReport(currentReportId)
    }
  }, [currentReportId, fetchReport])

  return isInformationLoading ? (
    <Box sx={mainLayout}>
      <CircularProgress size={64} />
    </Box>
  ) : (
    <>
      <TableNav
        information={information}
        team={team}
        projectId={projectId}
        fetchTeam={fetchTeam}
        fetchInformation={fetchInformation}
        changeReadOnlyElement={changeReadOnlyElement}
        projectReport={projectDetails}
        readOnlyElement={readOnlyElement}
        setCurrentReportId={setCurrentReportId}
        reportId={projectDetails?.id}
      />
      <Details
        key={`details-${projectId}-${projectDetails?.id}}`}
        projectReport={projectDetails}
        fetchNewestReport={fetchNewestReport}
        reportId={projectDetails?.id}
        projectId={projectId}
        fetchReport={fetchReport}
        changeReadOnlyElement={changeReadOnlyElement}
        readOnlyElement={readOnlyElement}
        setCurrentReportId={setCurrentReportId}
        reportsDates={reportsDates}
        information={information}
        statuses={statuses}
        fetchInformation={fetchInformation}
      />
    </>
  )
}

export default ProjectTable
