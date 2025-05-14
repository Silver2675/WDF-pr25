import { Control, FieldErrors } from 'react-hook-form'
import { FormSchema } from '../../validation'
import { EmployeeData } from '../../types'

export interface Customer {
  name: string
  id: number
}

export interface CustomersOptionsProps {
  control: Control<FormSchema>
  errors: FieldErrors<FormSchema>
  employeeData?: EmployeeData | null
  disabled?: boolean
  setSelectedCustomer: React.Dispatch<React.SetStateAction<Customer | null>>
}
