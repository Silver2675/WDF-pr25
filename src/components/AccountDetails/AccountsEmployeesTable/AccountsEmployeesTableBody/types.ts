import { AccountsEmployeesOverview } from '../types'

export interface AccountsTableBodyProps {
  fetchData?: () => void
  overviews?: AccountsEmployeesOverview[]
  loading: boolean
  accountId: number
}
