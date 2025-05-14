import { MyProjectsFilters } from '@/components/MyProjects/types'
import { OverviewsFilters } from '@/components/ProjectsOverviews/types'
import { Dispatch, SetStateAction } from 'react'
import { Account, Employee, Project } from '../types'

export interface ProjectTableNavProps {
  filters: OverviewsFilters | MyProjectsFilters
  filterChange: (isActive: string) => void
  fetchData?: () => void
  title: string
  isOverviews?: boolean
  setFilters: Dispatch<SetStateAction<OverviewsFilters | MyProjectsFilters>>
  accounts: Account[]
  projects: Project[]
  employees?: Employee[]
}
