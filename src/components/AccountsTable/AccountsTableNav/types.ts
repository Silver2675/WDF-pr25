import { Account, AccountFilters } from '@/components/AccountsOverviews/types'
import { Dispatch, SetStateAction } from 'react'

export interface AccountTableNavProps {
  filters: AccountFilters
  fetchData?: () => void
  filterChange?: (isActive: string) => void
  title: string
  setFilters: Dispatch<SetStateAction<AccountFilters>>
  accounts: Account[]
}
