import { ReadOnlyElement } from '../ProjectTable/types'
import { BasicInformation, Team } from '../types'

export interface Body {
  name: string
  accountId: number
  dateOfFirstReport: string | null
  reporterId: number | string
  reportingFrequency: number | string
  technologies: Array<string>
  businessContext: string
}

export interface TeamBody {
  teamLeaderIds: number[]
  employeeIds: number[]
}

export interface EditInfoProps {
  projectId: string
  fetchInformation: () => void
  fetchTeam: () => void
  information: BasicInformation
  team: Team
  changeReadOnlyElement: (element: ReadOnlyElement) => void
  readOnlyElement?: ReadOnlyElement
}
