import { FieldValues, Control, FieldErrors } from 'react-hook-form'
import { FormSchemaReport } from '../../GiveReport/validation'
import { Report } from '../../types'
import { DetailsCardsType, StatusDetailsCards } from '../utils'
import { Statuses } from '../../GiveReport/Fields/FormStatuses/types'

export interface DetailsStatusesProps<T extends FieldValues> {
  projectReport?: Report
  reportId?: number | null
  control: Control<T | FormSchemaReport>
  errors?: FieldErrors<T | FormSchemaReport>
  readOnlyElement: string | null
  titleName: string
  titleId: keyof DetailsCardsType | keyof StatusDetailsCards
  statuses: Statuses[]
}
