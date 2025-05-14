'use client'

import React from 'react'
import { request } from '@/server/backend/types/request'
import { apiUrls } from '@/constants/apiUrls'
import dayjs from 'dayjs'
import { toast } from 'react-toastify'
import { ReportRequestBody } from '../GiveReport/types'
import { Card } from '@mui/material'
import CancelButton from '@/components/Buttons/CancelButton'
import SaveButton from '@/components/Buttons/SaveButton'
import { buttonsCard } from '@/styles/tableStyles'
import { EditReportProps } from './types'

const EditReport = ({
  fetchReport,
  reportId,
  projectId,
  changeReadOnlyElement,
  handleSubmit,
  fetchInformation,
}: EditReportProps) => {
  const patchReportData = handleSubmit(async (data) => {
    const body: ReportRequestBody = {
      dateOfReport: dayjs(data.dateOfReport).format('YYYY-MM-DD'),
      projectId: Number(projectId),
      projectPhase: data.projectPhase?.value,
      finishedActivities: data.finishedActivities,
      inProgressActivities: data.inProgressActivities,
      plannedActivities: data.plannedActivities,
      planTimeStatus: data.planTimeStatus?.value,
      resourcesStatus: data.resourcesStatus?.value,
      scopeStatus: data.scopeStatus?.value,
      costStatus: data.costStatus?.value,
      riskStatus: data.riskStatus?.value,
      clientSatisfactionLevelStatus: data.clientSatisfactionLevelStatus?.value,
      planTimeDetails: data.planTimeDetails,
      resourcesDetails: data.resourcesDetails,
      scopeDetails: data.scopeDetails,
      costDetails: data.costDetails,
      riskDetails: data.riskDetails,
      clientSatisfactionLevelDetails: data.clientSatisfactionLevelDetails,
      risks: data.risks,
      comment: data.comment,
      teamSize: data.teamSize
        ? Number(data.teamSize) === 0
          ? undefined
          : Number(data.teamSize)
        : undefined,
      positiveAspects: data.positiveAspects,
      currentProblems: data.currentProblems,
      news: data.news,
      helpNeeded: data.helpNeeded,
      openBugs: data.openBugs,
    }

    const { ok } = await request<{ status: number }>({
      url: apiUrls.report(reportId),
      method: 'PUT',
      body,
    })
    if (ok) {
      fetchReport(reportId)
      fetchInformation()
      changeReadOnlyElement(null)
      toast.success('Report edited successfully.')
    } else {
      toast.error('Something went wrong.')
    }
  })
  return (
    <Card
      elevation={0}
      sx={{
        ...buttonsCard,
        justifyContent: { sm: 'flex-end', xs: 'center' },
      }}
    >
      <CancelButton handleClose={() => changeReadOnlyElement(null)} />
      <SaveButton onSubmit={patchReportData} />
    </Card>
  )
}

export default EditReport
