import { AccountsProjectsOverview } from '../types'

export interface AccountsProjectsTableBodyProps {
  fetchData?: () => void
  overviews?: AccountsProjectsOverview[]
  loading: boolean
}
