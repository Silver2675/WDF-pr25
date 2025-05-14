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

export interface MyProjectsType {
  id: number
  accountName: string
  name: string
  reporterName: string
  reporterSurname: string
  dateOfReport: string | null
  dateOfNextReport: string | null
  planTimeStatus: number | null
  resourcesStatus: number | null
  scopeStatus: number | null
  costStatus: number | null
  riskStatus: number | null
  clientSatisfactionLevelStatus: number | null
}

export interface MyProjectsFilters {
  isActive: boolean
  customerName?: string
  projectName?: string
  reporterSurname?: string
  reportDateStart?: string
  reportDateEnd?: string
  orderBy?: string
}
