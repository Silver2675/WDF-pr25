import { Dispatch, SetStateAction } from 'react'
import {
  Customer,
  Employee,
  FeedbackFilters,
  FeedbackOverview,
  Project,
} from '../FeedbacksOverviews/types'

export interface FeedbacksTableProps {
  filters: FeedbackFilters
  fetchData?: () => void
  filterChange?: () => void
  overviews?: FeedbackOverview[]
  title: string
  setFilters: Dispatch<SetStateAction<FeedbackFilters>>
  loading: boolean
  handleSortChange: (orderBy: string) => void
  customers: Customer[]
  projects: Project[]
  employees: Employee[]
}

export interface TableColumn {
  feedbackId?: number
  employee?: string | null
  projectName?: string | null
  coordinator?: string | null
  clientName?: string | null
  employeePosition?: string | null
  overallRating?: string | number | null
  feedbackDate?: string | null
  id?: number
  customerName?: string | null
  reportSurname?: string | null
  lastFeedbackDate?: string | null
  nextFeedbackDate?: string | null
  reviewType?: number | string | null
  feedbackType?: number | string | null
  reviewersCount?: number | null
}
