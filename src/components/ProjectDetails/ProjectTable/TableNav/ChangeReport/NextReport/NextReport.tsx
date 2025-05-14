import NextProjectButton from '@/components/Buttons/NextProjectButton'
import React from 'react'
import { ReportDates } from '../../../../Details/DetailsRow/types'
import { Report } from '@/components/ProjectDetails/types'

interface Props {
  reportsDates?: ReportDates[]
  setCurrentReportId?: (id: number) => void
  projectReport: Report
}

const NextReport = ({
  reportsDates,
  setCurrentReportId,
  projectReport,
}: Props) => {
  const currentDate = reportsDates?.find((date) => date.id === projectReport.id)

  const nextId = currentDate
    ? reportsDates?.[
        (reportsDates.indexOf(currentDate) - 1) % reportsDates.length
      ]?.id
    : null

  return nextId ? (
    <NextProjectButton
      handleClick={() => setCurrentReportId?.(nextId)}
      nextId={nextId}
      tooltipTitle="Next Report"
    />
  ) : null
}

export default NextReport
