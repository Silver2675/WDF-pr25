'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { Box, CircularProgress } from '@mui/material'
import NoReportsDog from './NoReportsDog'
import TableNav from '../ProjectTable/TableNav'
import { NoReportsProps } from './types'
import { apiUrls } from '@/constants/apiUrls'
import { initialValues } from '../const'
import { BasicInformation } from '../types'
import { request } from '@/server/backend/types/request'
import Details from '../Details'
import { readOnlyStatus } from '../utils'
import { mainLayout } from '@/styles/styles'
import DetailsNextReport from '../Details/DetailsRow/DetailsNextReport'

const NoReportsView = ({
  projectId,
  fetchNewestReport,
  fetchTeam,
  projectReport,
  statuses,
  readOnlyElement,
  changeReadOnlyElement,
  setCurrentReportId,
  team,
}: NoReportsProps) => {
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

  return isInformationLoading ? (
    <Box sx={mainLayout}>
      <CircularProgress size={64} />
    </Box>
  ) : (
    <>
      <TableNav
        information={information}
        projectId={projectId}
        fetchTeam={fetchTeam}
        fetchInformation={fetchInformation}
        changeReadOnlyElement={changeReadOnlyElement}
        readOnlyElement={readOnlyElement}
        team={team}
        setCurrentReportId={setCurrentReportId}
      />
      {readOnlyStatus(readOnlyElement) &&
        !projectReport &&
        information.terminationDate && (
          <Box sx={{ ml: 2, mt: 2 }}>
            <DetailsNextReport
              projectId={projectId}
              information={information}
              readOnlyElement={readOnlyElement}
            />
          </Box>
        )}
      {readOnlyStatus(readOnlyElement) ? (
        <NoReportsDog />
      ) : (
        <Details
          projectId={projectId}
          fetchNewestReport={fetchNewestReport}
          projectReport={projectReport}
          changeReadOnlyElement={changeReadOnlyElement}
          reportId={projectReport?.id}
          readOnlyElement={readOnlyElement}
          information={information}
          statuses={statuses}
          setCurrentReportId={setCurrentReportId}
          fetchInformation={fetchInformation}
        />
      )}
    </>
  )
}

export default NoReportsView
