import { MyProjectsType } from '../MyProjects/types'
import { Overview } from '../ProjectsOverviews/types'
import { TableColumn } from './types'

export const tableDataOverviews = (
  overviews?: Overview[]
): TableColumn[] | undefined =>
  overviews?.map((overview) => ({
    id: overview.id,
    accountName: overview.accountName,
    name: overview.name,
    reporterName: `${overview.reporterName} ${overview.reporterSurname}`,
    dateOfReport: overview.dateOfReport ? overview.dateOfReport : '-',
    dateOfNextReport: overview.dateOfNextReport
      ? overview.dateOfNextReport
      : '-',
    planTimeStatus: overview.planTimeStatus,
    resourcesStatus: overview.resourcesStatus,
    scopeStatus: overview.scopeStatus,
    costStatus: overview.costStatus,
    riskStatus: overview.riskStatus,
    clientSatisfactionLevelStatus: overview.clientSatisfactionLevelStatus,
  }))

export const tableDataProjects = (
  projects?: MyProjectsType[]
): TableColumn[] | undefined =>
  projects?.map((project) => ({
    id: project.id,
    accountName: project.accountName,
    name: project.name,
    reporterName: `${project.reporterName} ${project.reporterSurname}`,
    dateOfReport: project.dateOfReport ? project.dateOfReport : '-',
    dateOfNextReport: project.dateOfNextReport ? project.dateOfNextReport : '-',
    planTimeStatus: project.planTimeStatus,
    resourcesStatus: project.resourcesStatus,
    scopeStatus: project.scopeStatus,
    costStatus: project.costStatus,
    riskStatus: project.riskStatus,
    clientSatisfactionLevelStatus: project.clientSatisfactionLevelStatus,
  }))
