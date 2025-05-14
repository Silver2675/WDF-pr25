import { FieldValues, FieldPath, Control, FieldErrors } from 'react-hook-form'

export interface NumberInputProps<
  T extends FieldValues,
  N extends FieldPath<T>
> {
  control: Control<T>
  name: N
  errors?: FieldErrors<T>
  value?: string | number | null
  readOnly: boolean
  label: string
  id?: number | null
}
