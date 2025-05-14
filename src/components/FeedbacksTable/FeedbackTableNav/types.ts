import {
  Customer,
  Employee,
  FeedbackFilters,
  Project,
} from '@/components/FeedbacksOverviews/types'
import { Dispatch, SetStateAction } from 'react'

export interface FeedbackTableNavProps {
  filters: FeedbackFilters
  fetchData?: () => void
  filterChange?: () => void
  title: string
  setFilters: Dispatch<SetStateAction<FeedbackFilters>>
  employees: Employee[]
  projects: Project[]
  customers: Customer[]
}
