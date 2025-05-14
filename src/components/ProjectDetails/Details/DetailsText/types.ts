import { FieldValues, Control, FieldErrors } from 'react-hook-form'
import { FormSchemaReport } from '../../GiveReport/validation'
import { Report } from '../../types'
import { DetailsCardsType, StatusDetailsCards, FirstRow } from '../utils'

export interface DetailsTextProps<T extends FieldValues> {
  reportId?: number | null
  control: Control<T | FormSchemaReport>
  errors?: FieldErrors<T | FormSchemaReport>
  readOnlyElement: string | null
  titleName: string
  titleId: keyof DetailsCardsType | keyof StatusDetailsCards | keyof FirstRow
  projectReport?: Report
}
