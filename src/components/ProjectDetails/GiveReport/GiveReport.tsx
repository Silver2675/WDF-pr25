import { FormSchemaReport } from '@/components/ProjectDetails/GiveReport/validation'
import { request } from '@/server/backend/types/request'
import React from 'react'
import { toast } from 'react-toastify'
import { ReportRequestBody, GiveReportProps } from './types'
import dayjs from 'dayjs'
import { apiUrls } from '@/constants/apiUrls'
import CancelButton from '@/components/Buttons/CancelButton'
import SaveButton from '@/components/Buttons/SaveButton'
import { buttonsCard } from '@/styles/tableStyles'
import { Card } from '@mui/material'

const GiveReport = ({
  changeReadOnlyElement,
  fetchNewestReport,
  projectId,
  handleSubmit,
  fetchInformation,
}: GiveReportProps) => {
  const postFormData = handleSubmit(async (data: FormSchemaReport) => {
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
      url: apiUrls.addReport,
      method: 'POST',
      body,
    })
    if (ok) {
      fetchNewestReport()
      fetchInformation()
      changeReadOnlyElement(null)
      toast.success('Report added successfully.')
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
      <SaveButton onSubmit={postFormData} />
    </Card>
  )
}

export default GiveReport
