import React from 'react'
import PrevReport from './PrevReport'
import NextReport from './NextReport'
import { buttonsCard } from '@/styles/tableStyles'
import { Card } from '@mui/material'
import { ReportDates } from '@/components/ProjectDetails/Details/DetailsRow/types'
import { Report } from '@/components/ProjectDetails/types'

interface Props {
  reportsDates?: ReportDates[]
  setCurrentReportId?: (id: number) => void
  projectReport: Report
}

const ChangeReport = ({
  reportsDates,
  setCurrentReportId,
  projectReport,
}: Props) => {
  return reportsDates && reportsDates.length > 1 ? (
    <Card
      elevation={0}
      sx={{
        ...buttonsCard,
        gap: 0,
        padding: 0,
        mr: -2,
        flexWrap: 'wrap',
      }}
    >
      <PrevReport
        setCurrentReportId={setCurrentReportId}
        reportsDates={reportsDates}
        projectReport={projectReport}
      />
      <NextReport
        setCurrentReportId={setCurrentReportId}
        reportsDates={reportsDates}
        projectReport={projectReport}
      />
    </Card>
  ) : null
}

export default ChangeReport
