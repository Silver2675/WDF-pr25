import { Control, FieldErrors } from 'react-hook-form'
import { FormSchema } from '../../Form/validation'

export interface DescriptionFieldProps {
  control: Control<FormSchema>
  errors: FieldErrors<FormSchema>
  name: string
}
