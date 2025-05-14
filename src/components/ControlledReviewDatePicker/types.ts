import { FieldValues, Control, FieldErrors, FieldPath } from 'react-hook-form'

export interface ReportDateProps<
  T extends FieldValues,
  N extends FieldPath<T>
> {
  control: Control<T>
  errors?: FieldErrors<T>
  name: N
  label: string
  message: string
}
