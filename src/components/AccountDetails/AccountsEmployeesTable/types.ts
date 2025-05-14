export interface projectNames {
  id: number
  name: string
}

export interface AccountsEmployeesOverview {
  name: string
  id: number
  givenName?: string
  surname?: string
  mail?: string
  isJiter?: boolean
  jobTitle?: string
  projectNames?: projectNames[]
}

export interface AccountTableProps {
  accountId: number
}

export interface TableColumn {
  id?: number | null
  name?: string | null
  mail?: string | null
  jobTitle?: string
  currentProjects?: string | null
  givenName?: string | null
  surname?: string | null
  projectNames?: projectNames[] | null
}
