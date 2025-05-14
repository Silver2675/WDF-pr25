import { Dispatch, SetStateAction } from 'react'

export interface AccountProjectsFilters {
  isActive: boolean
}

export interface AccountsProjectsTableNavProps {
  filters: AccountProjectsFilters
  fetchData?: () => void
  filterChange?: (isActive: string) => void
  setFilters: Dispatch<SetStateAction<AccountProjectsFilters>>
}
