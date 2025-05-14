import { Control, FieldErrors } from 'react-hook-form'
import { FormSchema } from '../../validation'

export interface GradesOptionsProps {
  control: Control<FormSchema>
  errors: FieldErrors<FormSchema>
  disabled?: boolean
}
