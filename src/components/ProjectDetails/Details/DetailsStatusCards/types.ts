import { FieldValues, Control, FieldErrors } from 'react-hook-form'
import { FormSchemaReport } from '../../GiveReport/validation'
import { Report } from '../../types'
import { Statuses } from '../../GiveReport/Fields/FormStatuses/types'

export interface DetailsStatusCardsProps<T extends FieldValues> {
  projectReport?: Report
  reportId?: number | null
  control: Control<T | FormSchemaReport>
  errors?: FieldErrors<T | FormSchemaReport>
  readOnlyElement: string | null
  statuses: Statuses[]
}
