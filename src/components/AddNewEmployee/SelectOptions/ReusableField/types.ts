import { Control, FieldErrors } from 'react-hook-form'
import { FormSchema } from '../../Form/validation'

export interface ReusableFieldProps {
  control: Control<FormSchema>
  errors: FieldErrors<FormSchema>
  name: keyof FormSchema
  label: string
  type?: string
}
