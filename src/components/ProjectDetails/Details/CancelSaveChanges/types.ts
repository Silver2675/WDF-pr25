import { UseFormHandleSubmit } from 'react-hook-form'
import { FormSchemaReport } from '../../GiveReport/validation'
import { ReadOnlyElement } from '../../ProjectTable/types'
import { Report } from '../../types'

export interface CancelSaveProps {
  projectReport?: Report
  reportId?: number
  projectId: string
  fetchReport?: (id: number) => void
  changeReadOnlyElement: (element: ReadOnlyElement) => void
  readOnlyElement: string | null
  handleSubmit: UseFormHandleSubmit<FormSchemaReport>
  fetchNewestReport: () => void
  fetchInformation: () => void
}
