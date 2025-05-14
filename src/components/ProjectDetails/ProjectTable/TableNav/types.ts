import { BasicInformation, Report, Team } from '../../types'
import { ReadOnlyElement } from '../types'

export interface TableNavProps {
  information: BasicInformation
  team: Team
  projectId: string
  fetchInformation: () => void
  fetchTeam: () => void
  changeReadOnlyElement: (element: ReadOnlyElement) => void
  projectReport?: Report
  readOnlyElement: ReadOnlyElement
  setCurrentReportId: (id: number) => void
  reportId?: number
}
