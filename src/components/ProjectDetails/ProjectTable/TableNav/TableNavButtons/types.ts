import { BasicInformation, Report } from '@/components/ProjectDetails/types'
import { ReadOnlyElement } from '../../types'

export interface TableButtonsProps {
  setCurrentReportId: (id: number) => void
  readOnlyElement: string | null
  manager: boolean
  information: BasicInformation
  fetchInformation: () => void
  projectId: string
  reportId?: number
  changeReadOnlyElement: (element: ReadOnlyElement) => void
  projectReport?: Report
}
