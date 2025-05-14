import {
  EmployeeFilters,
  EmployeeOverview,
} from '@/components/EmployeesOverviews/types'
import { Dispatch, SetStateAction } from 'react'

export interface EmployeesTableProps {
  filters: EmployeeFilters
  fetchData?: () => void
  filterChange?: () => void
  overviews?: EmployeeOverview[]
  title: string
  setFilters: Dispatch<SetStateAction<EmployeeFilters>>
  loading: boolean
  handleSortChange: (orderBy: string) => void
}
