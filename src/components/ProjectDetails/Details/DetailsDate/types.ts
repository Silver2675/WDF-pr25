import { FieldValues, Control, FieldErrors, FieldPath } from 'react-hook-form'
import { Report } from '../../types'
import { ReportDates } from '../DetailsRow/types'

export interface DetailsDateProps<
  T extends FieldValues,
  N extends FieldPath<T>
> {
  projectReport?: Report
  reportId?: number | null
  control: Control<T>
  errors?: FieldErrors<T>
  readOnlyElement: string | null
  titleName: string
  titleId: N
  index: number
  setCurrentReportId?: (id: number) => void
  reportsDates?: ReportDates[]
}
