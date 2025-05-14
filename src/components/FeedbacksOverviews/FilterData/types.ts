export interface Body {
  id: string
  employee: string
  project: string
  coordinator: string
  client: string
  employeePosition: string
  feedbackDateStart: string
  feedbackDateEnd: string
}

export interface MyFeedback {
  feedbackId: number
  employee: string | null
  projectName: string | null
  coordinator: string | null
  clientName: string | null
  employeePosition: string | null
  overallRating: number | null
  isActive: 'ACTIVE' | 'INACTIVE'
  feedbackDate: string | null
}

export interface MyFeedbacksFilters {
  isActive: boolean
  orderBy: string
}

export interface Project {
  title: string
  id: number
}

export interface Employee {
  givenName: string
  surname: string
  id: number
}
