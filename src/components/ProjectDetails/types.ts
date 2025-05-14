export interface BasicInformation {
  id: number
  name: string
  account: {
    id: number
    name: string
  }
  reporter: {
    id: number
    givenName: string
    surname: string
  }
  isActive: boolean
  dateOfFirstReport: string | null
  reportingFrequency: number
  terminationDate: string | null
  filesLink: string | null
  businessContext: string | null
  technologies: string[]
  lastFeedbackDate: string | null
}

export interface Report {
  id: number
  projectId: number
  dateOfReport: string | null
  dateOfNextReport: string | null
  projectPhase: number | null
  finishedActivities: string | null
  inProgressActivities: string | null
  plannedActivities: string | null
  planTimeStatus: number
  resourcesStatus: number
  scopeStatus: number
  costStatus: number
  riskStatus: number
  clientSatisfactionLevelStatus: number
  planTimeDetails: string | null
  resourcesDetails: string | null
  scopeDetails: string | null
  costDetails: string | null
  riskDetails: string | null
  clientSatisfactionLevelDetails: string | null
  comment: string | null
  risks: string | null
  teamSize: number | null
  positiveAspects: string | null
  currentProblems: string | null
  news: string | null
  helpNeeded: string | null
  openBugs: string | null
}

export interface TeamMember {
  id: number
  givenName: string
  surname: string
  isSubordinate?: boolean
  isJiter?: boolean
}

export interface Team {
  teamLeaders: TeamMember[]
  teamMembers: TeamMember[]
}
