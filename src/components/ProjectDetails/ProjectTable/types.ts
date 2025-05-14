import { Statuses } from '../GiveReport/Fields/FormStatuses/types'
import { Team } from '../types'

export type ReadOnlyElement =
  | 'EDITING_INFORMATION'
  | 'EDITING_REPORT'
  | 'ADD_REPORT'
  | null

export interface ProjectTableProps {
  projectId: string
  fetchNewestReport: () => void
  fetchTeam: () => void
  currentReportId?: number
  setCurrentReportId: (id: number) => void
  statuses: Statuses[]
  readOnlyElement: ReadOnlyElement
  changeReadOnlyElement: (element: ReadOnlyElement) => void
  team: Team
}

