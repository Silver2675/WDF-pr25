export interface Customer {
  name: string
  id: number
}

export interface Employee {
  givenName: string
  surname: string
  id: number
}

export interface Project {
  title: string
  id: number
}

export interface EmployeeOverview {
  employeeMail: string | null
  employee: string | null
  projects: EmployeeProjects[] | null
  overallRating: number
  feedbackDate: string | null
  reviewersCount?: number | null
}

export interface EmployeeProjects {
  id: number | null
  name: string | null
  accountId: number | null
  accountName: string | null
}

export interface EmployeeFilters {
  employee?: string
  employeeMail?: string
  projectName?: string
  clientName?: string
  feedbackStartDate?: string
  feedbackEndDate?: string
  orderBy?: string
}
