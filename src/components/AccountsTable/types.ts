import { Dispatch, SetStateAction } from 'react'
import {
  Account,
  AccountFilters,
  AccountOverview,
} from '../AccountsOverviews/types'

export interface AccountTableProps {
  filters: AccountFilters
  fetchData?: () => void
  filterChange?: (isActive: string) => void
  title: string
  setFilters: Dispatch<SetStateAction<AccountFilters>>
  overviews?: AccountOverview[]
  loading: boolean
  handleSortChange: (orderBy: string) => void
  accounts: Account[]
}

export interface TableColumn {
  id: number
  name?: string | null
  deliveryManager?: string | null
}
