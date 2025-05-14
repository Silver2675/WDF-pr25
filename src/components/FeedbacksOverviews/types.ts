export interface Project {
  title: string
  id: number
}

export interface Employee {
  givenName: string
  surname: string
  id: number
}

export interface Customer {
  name: string
  id: number
}

export interface FeedbackOverview {
  feedbackId: number
  employee: string | null
  projectName: string | null
  coordinator: string | null
  clientName: string | null
  employeePosition: string | null
  overallRating: number
  feedbackDate: string | null
  feedbackType?: number | string | null
  reviewType?: number | string | null
  reviewersCount?: number | null
}

export interface FeedbackFilters {
  employee?: string
  projectName?: string
  clientName?: string
  customerName?: string
  coordinator?: string
  reporterName?: string
  reporterSurname?: string
  employeePosition?: string
  feedbackStartDate?: string
  feedbackEndDate?: string
  orderBy?: string
}
