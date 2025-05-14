export interface Overview {
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

export interface OverviewsFilters {
  isActive: boolean
  accountName?: string
  name?: string
  reporterSurname?: string
  reportDateStart?: string
  reportDateEnd?: string
  orderBy?: string
}

export interface ProjectStatuses {
  planTimeStatus?: number | null
  resourcesStatus?: number | null
  scopeStatus?: number | null
  costStatus?: number | null
  riskStatus?: number | null
}

export interface ProjectsFilters {
  isActive: boolean
  accountName?: string
  name?: string
  reporterSurname?: string
  reportDateStart?: string
  reportDateEnd?: string
  orderBy?: string
}
