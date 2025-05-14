import { Control, FieldErrors } from 'react-hook-form'
import { FormSchema } from '../../validation'

export interface AnswersFieldProps {
  control: Control<FormSchema>
  errors: FieldErrors<FormSchema>
  disabled?: boolean
}
