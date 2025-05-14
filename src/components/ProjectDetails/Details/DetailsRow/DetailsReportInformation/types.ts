import { FormSchemaReport } from '@/components/ProjectDetails/GiveReport/validation'
import { Report } from '@/components/ProjectDetails/types'
import { FieldValues, Control, FieldErrors } from 'react-hook-form'
import { ReportDates } from '../types'

export interface DetailsReportProps<T extends FieldValues> {
  projectReport?: Report
  setCurrentReportId?: (id: number) => void
  reportId?: number | null
  control: Control<T | FormSchemaReport>
  errors?: FieldErrors<T | FormSchemaReport>
  readOnlyElement: string | null
  reportsDates?: ReportDates[]
}
