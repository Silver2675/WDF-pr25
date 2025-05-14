import { FieldValues, Control, FieldErrors } from 'react-hook-form'
import { FormSchemaReport } from '../../GiveReport/validation'
import { Report } from '../../types'

export interface DetailsPhasesProps<T extends FieldValues> {
  readOnlyElement: string | null
  reportId?: number | null
  control: Control<T | FormSchemaReport>
  errors?: FieldErrors<T | FormSchemaReport>
  projectReport?: Report
}
