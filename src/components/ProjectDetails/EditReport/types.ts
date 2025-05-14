import { UseFormHandleSubmit } from 'react-hook-form'
import { ReadOnlyElement } from '../ProjectTable/types'
import { Report } from '../types'
import { FormSchemaReport } from '../GiveReport/validation'

export interface EditReportProps {
  projectReport?: Report
  changeReadOnlyElement: (element: ReadOnlyElement) => void
  reportId?: number
  projectId: string
  fetchReport: (id?: number) => void
  handleSubmit: UseFormHandleSubmit<FormSchemaReport>
  fetchInformation: () => void
}
