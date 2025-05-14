import {
  Customer,
  Employee,
  EmployeeFilters,
  Project,
} from '@/components/EmployeesOverviews/types'
import { Dispatch, SetStateAction } from 'react'

export interface EmployeeTableNavProps {
  filters: EmployeeFilters
  fetchData?: () => void
  filterChange?: () => void
  title: string
  setFilters: Dispatch<SetStateAction<EmployeeFilters>>
  employees: Employee[]
  projects: Project[]
  customers: Customer[]
}
