export interface AccountsProjectsOverview {
  id: number
  name: string
  reporterName: string | null
  reporterSurname: string | null
  dateOfReport: string | null
}

export interface AccountProjectsTableProps {
  accountId: number
}

export interface TableColumn {
  id?: number | null
  name?: string | null
  currentProject?: string | null
}
