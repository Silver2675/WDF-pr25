import { Dispatch, SetStateAction } from 'react'
import {
  Customer,
  Employee,
  EmployeeFilters,
  EmployeeOverview,
  Project,
} from '../EmployeesOverviews/types'

export interface EmployeesTableProps {
  filters: EmployeeFilters
  fetchData?: () => void
  filterChange?: () => void
  overviews?: EmployeeOverview[]
  title: string
  setFilters: Dispatch<SetStateAction<EmployeeFilters>>
  loading: boolean
  handleSortChange: (orderBy: string) => void
  employees: Employee[]
  projects: Project[]
  customers: Customer[]
}

export interface TableColumn {
  employeeMail?: string | null
  employee?: string | null
  projectName?: string | null
  clientName?: string | null
  overallRating?: string | number | null
  feedbackDate?: string | null
}
