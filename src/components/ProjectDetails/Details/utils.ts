import { BasicInformation, Report } from '../types'
import { phasesNames } from '../Phases/Phases'
import { statusStyles } from '../Statuses/Statuses'
import dayjs from 'dayjs'

export interface FirstRow {
  projectPhase: number | null
  dateOfReport: string | null
  teamSize: number | null
}

export interface FirstRowDetails {
  reporterFullName: string
  reportingFrequency: string
  dateOfFirstReport: string | null
  terminationDate: string | null
  filesLink: string | null
  lastFeedbackDate: string | null
}
export interface DetailsCardsType {
  finishedActivities: string | null
  inProgressActivities: string | null
  plannedActivities: string | null
  comment: string | null
  risks: string | null
  positiveAspects: string | null
  currentProblems: string | null
  news: string | null
  helpNeeded: string | null
  openBugs: string | null
}

export interface StatusDetailsCards {
  planTimeStatus: number | null
  scopeStatus: number | null
  costStatus: number | null
  riskStatus: number | null
  resourcesStatus: number | null
  clientSatisfactionLevelStatus: number | null
  planTimeDetails: string | null
  scopeDetails: string | null
  costDetails: string | null
  riskDetails: string | null
  resourcesDetails: string | null
  clientSatisfactionLevelDetails: string | null
}

export const firstRowReportData = (projectReports: Report[]): FirstRow[] =>
  projectReports.map((report) => ({
    id: report.id,
    projectPhase: report.projectPhase,
    dateOfReport: report.dateOfReport,
    teamSize: report.teamSize,
  }))

export const cardsData = (projectReports: Report[]): DetailsCardsType[] =>
  projectReports.map((report) => ({
    id: report.id,
    finishedActivities: report.finishedActivities,
    inProgressActivities: report.inProgressActivities,
    plannedActivities: report.plannedActivities,
    comment: report.comment,
    risks: report.risks,
    positiveAspects: report.positiveAspects,
    currentProblems: report.currentProblems,
    news: report.news,
    helpNeeded: report.helpNeeded,
    openBugs: report.openBugs,
  }))

export const statusCardsData = (
  projectReports: Report[]
): StatusDetailsCards[] =>
  projectReports.map((report) => ({
    id: report.id,
    planTimeStatus: report.planTimeStatus,
    scopeStatus: report.scopeStatus,
    costStatus: report.costStatus,
    riskStatus: report.riskStatus,
    resourcesStatus: report.resourcesStatus,
    clientSatisfactionLevelStatus: report.clientSatisfactionLevelStatus,
    planTimeDetails: report.planTimeDetails,
    scopeDetails: report.scopeDetails,
    costDetails: report.costDetails,
    riskDetails: report.riskDetails,
    resourcesDetails: report.resourcesDetails,
    clientSatisfactionLevelDetails: report.clientSatisfactionLevelDetails
  }))

export const mappedInformation = (information: BasicInformation) => ({
  reporterFullName: `${information?.reporter.givenName} ${information?.reporter.surname}`,
  reportingFrequency:
    information?.reportingFrequency === 7
      ? '1 week'
      : information?.reportingFrequency !== 0
      ? `${information.reportingFrequency / 7} weeks`
      : '',
  dateOfFirstReport: information?.dateOfFirstReport || 'NA',
  terminationDate: information?.terminationDate || 'NA',
  lastFeedbackDate: information?.lastFeedbackDate || 'NA',
  filesLink: information?.filesLink || 'NA',
})

export const reportDefaultValues = (
  report?: Report,
  readOnlyElement?: string | null
) => {
  if (!report)
    return {
      dateOfReport: dayjs(),
      projectPhase: undefined,
      planTimeStatus: undefined,
      scopeStatus: undefined,
      costStatus: undefined,
      riskStatus: undefined,
      resourcesStatus: undefined,
      clientSatisfactionLevelStatus: undefined
    }

  return {
    dateOfReport:
      readOnlyElement === 'ADD_REPORT' ? dayjs() : dayjs(report.dateOfReport),
    projectPhase: {
      label: report?.projectPhase !== null && report?.projectPhase !== undefined
        ? phasesNames[report.projectPhase].name
        : '',
      value: report?.projectPhase,
    },
    teamSize: report?.teamSize || '',
    finishedActivities: report?.finishedActivities,
    inProgressActivities: report?.inProgressActivities,
    plannedActivities: report?.plannedActivities,
    comment: report?.comment,
    planTimeStatus: {
      label: statusStyles[report?.planTimeStatus]?.name || '',
      value: report?.planTimeStatus,
    },
    scopeStatus: {
      label: statusStyles[report?.scopeStatus]?.name || '',
      value: report?.scopeStatus,
    },
    costStatus: {
      label: statusStyles[report?.costStatus]?.name || '',
      value: report?.costStatus,
    },
    riskStatus: {
      label: statusStyles[report?.riskStatus]?.name || '',
      value: report?.riskStatus,
    },
    resourcesStatus: {
      label: statusStyles[report?.resourcesStatus]?.name || '',
      value: report?.resourcesStatus,
    },
    clientSatisfactionLevelStatus: {
      label: statusStyles[report?.clientSatisfactionLevelStatus]?.name || '',
      value: report?.clientSatisfactionLevelStatus,
    },
    planTimeDetails: report?.planTimeDetails,
    scopeDetails: report?.scopeDetails,
    costDetails: report?.costDetails,
    riskDetails: report?.riskDetails,
    resourcesDetails: report?.resourcesDetails,
    clientSatisfactionLevelDetails: report?.clientSatisfactionLevelDetails,
    risks: report?.risks,
    positiveAspects: report?.positiveAspects,
    currentProblems: report?.currentProblems,
    news: report?.news,
    helpNeeded: report?.helpNeeded,
    openBugs: report?.openBugs
  }
}
