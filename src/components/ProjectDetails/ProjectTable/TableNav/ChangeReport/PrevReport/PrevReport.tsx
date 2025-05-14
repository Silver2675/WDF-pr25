import PrevProjectButton from '@/components/Buttons/PrevProjectButton'
import React from 'react'
import { ReportDates } from '../../../../Details/DetailsRow/types'
import { Report } from '@/components/ProjectDetails/types'

interface Props {
  reportsDates?: ReportDates[]
  setCurrentReportId?: (id: number) => void
  projectReport: Report
}

const PrevReport = ({
  reportsDates,
  setCurrentReportId,
  projectReport,
}: Props) => {
  const currentDate = reportsDates?.find((date) => date.id === projectReport.id)

  const prevId = currentDate
    ? reportsDates?.[reportsDates.indexOf(currentDate) + 1]?.id
    : null

  return prevId ? (
    <PrevProjectButton
      handleClick={() => setCurrentReportId?.(prevId)}
      prevId={prevId}
      tooltipTitle="Previous Report"
    />
  ) : null
}

export default PrevReport
