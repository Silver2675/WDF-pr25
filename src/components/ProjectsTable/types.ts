import { Dispatch, SetStateAction } from 'react'
import { MyProjectsFilters, MyProjectsType } from '../MyProjects/types'
import { Overview, OverviewsFilters } from '../ProjectsOverviews/types'

export interface Project {
  name: string
  id: number
}

export interface Account {
  name: string
  id: number
}

export interface Employee {
  givenName: string
  surname: string
  id: number
}

export interface ProjectsTableProps {
  filters: OverviewsFilters | MyProjectsFilters
  filterChange: (isActive: string) => void
  fetchData?: () => void
  overviews?: Overview[]
  projects?: MyProjectsType[]
  title: string
  isOverviews?: boolean
  setFilters: Dispatch<SetStateAction<OverviewsFilters | MyProjectsFilters>>
  loading: boolean
  handleSortChange: (orderBy: string) => void
  accounts: Account[]
  filterProjects: Project[]
  employees?: Employee[]
}

export interface TableColumn {
  id: number
  accountName: string | null
  name: string | null
  reporterName?: string | null
  dateOfReport: string | null
  dateOfNextReport: string | null
  planTimeStatus?: number | null
  resourcesStatus?: number | null
  scopeStatus?: number | null
  costStatus?: number | null
  riskStatus?: number | null
  clientSatisfactionLevelStatus: number | null
}
