import { Control, FieldErrors } from 'react-hook-form'
import { FormSchema } from '../../validation'

export interface Employee {
  mail: string
  givenName: string
  surname: string
  id: number
}

export interface EmployeeProps {
  control: Control<FormSchema>
  errors: FieldErrors<FormSchema>
}
