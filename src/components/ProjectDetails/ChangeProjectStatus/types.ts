import { BasicInformation } from '../types'

export interface ProjectStatusProps {
  information: BasicInformation
  projectId: string
  fetchInformation: () => void
}
