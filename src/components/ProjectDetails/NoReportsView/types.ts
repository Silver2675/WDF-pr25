import { Statuses } from '../GiveReport/Fields/FormStatuses/types'
import { ReadOnlyElement } from '../ProjectTable/types'
import { Report, Team } from '../types'

export interface NoReportsProps {
  projectId: string
  fetchNewestReport: () => void
  fetchTeam: () => void
  projectReport?: Report
  statuses: Statuses[]
  readOnlyElement: ReadOnlyElement
  changeReadOnlyElement: (element: ReadOnlyElement) => void
  setCurrentReportId: (id: number) => void
  team: Team
}
