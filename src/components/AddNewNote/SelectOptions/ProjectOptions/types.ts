import { Control, FieldErrors } from 'react-hook-form'
import { FormSchema } from '../../validation'
import { EmployeeData } from '../../types'

export interface Project {
  id: number
  title: string
}

export interface ProjectsOptionsProps {
  control: Control<FormSchema>
  gradedEmployeeEmail?: string
  errors: FieldErrors<FormSchema>
  employeeData?: EmployeeData | null
  disabled?: boolean
  selectedCustomerId?: number
}
