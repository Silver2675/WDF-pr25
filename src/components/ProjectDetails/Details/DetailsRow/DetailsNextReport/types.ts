import { BasicInformation, Report } from '@/components/ProjectDetails/types'

export interface NextReportProps {
  projectId: string
  information: BasicInformation
  readOnlyElement: string | null
  projectReport?: Report
}
