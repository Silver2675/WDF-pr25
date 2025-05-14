import { BasicInformation, Team } from '@/components/ProjectDetails/types'
import { ReadOnlyElement } from '../../types'

export interface ProjectInfoProps {
  readOnlyElement: ReadOnlyElement | null
  projectId: string
  information: BasicInformation
  team: Team
  fetchInformation: () => void
  fetchTeam: () => void
  manager: boolean
  changeReadOnlyElement: (element: ReadOnlyElement) => void
}
