import { FieldValues, Control, FieldErrors } from 'react-hook-form'
import { BasicInformation, Report } from '../../types'
import { FormSchemaReport } from '../../GiveReport/validation'
import { ReadOnlyElement } from '../../ProjectTable/types'

export interface DetailsRowProps<T extends FieldValues> {
  projectReport?: Report
  setCurrentReportId?: (id: number) => void
  patchReportData?: () => void
  reportsDates?: ReportDates[]
  reportId?: number | null
  projectId: string
  control: Control<T | FormSchemaReport>
  errors?: FieldErrors<T | FormSchemaReport>
  readOnlyElement: string | null
  changeReadOnlyElement: (element: ReadOnlyElement) => void
  information: BasicInformation
}

export interface ReportDates {
  id: number
  dateOfReport: string
}
