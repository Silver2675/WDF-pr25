import { FieldValues, Control, FieldErrors } from 'react-hook-form'
import { FormSchemaReport } from '../../GiveReport/validation'
import { Report } from '../../types'

export interface DetailsCardsProps<T extends FieldValues> {
  projectReport?: Report
  reportId?: number | null
  control: Control<T | FormSchemaReport>
  errors?: FieldErrors<T | FormSchemaReport>
  readOnlyElement: string | null
}
