import { ReportsDates } from '@/server/backend/types/report'
import { ReadOnlyElement } from '../ProjectTable/types'
import { BasicInformation, Report } from '../types'
import { Statuses } from '../GiveReport/Fields/FormStatuses/types'

export interface DetailsProps {
  projectReport?: Report
  reportId?: number
  projectId: string
  fetchReport?: (id: number) => void
  changeReadOnlyElement: (element: ReadOnlyElement) => void
  readOnlyElement: string | null
  setCurrentReportId: (id: number) => void
  reportsDates?: ReportsDates
  information: BasicInformation
  statuses: Statuses[]
  fetchNewestReport: () => void
  fetchInformation: () => void
}
