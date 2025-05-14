import { FieldValues, FieldPath, Control, FieldErrors } from 'react-hook-form'

export interface TextInputProps<T extends FieldValues, N extends FieldPath<T>> {
  control: Control<T>
  name: N
  errors?: FieldErrors<T>
  value?: string | number | null
  readOnly: boolean
}
