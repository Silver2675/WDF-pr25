import { Control, FieldErrors } from 'react-hook-form'
import { FormSchema } from '../../Form/validation'

export interface WebsiteFieldProps {
  control: Control<FormSchema>
  errors: FieldErrors<FormSchema>
  name: string
}
