import { DATE_FORMAT } from '@/constants/dateFormats'
import { EmployeeOverview } from '../EmployeesOverviews/types'
import { TableColumn } from './types'
import dayjs from 'dayjs'

export const tableDataOverviews = (
  overviews?: EmployeeOverview[]
): TableColumn[] | undefined =>
  overviews?.map((overview) => ({
    employee: overview.employee ?? '-',
    employeeMail: overview.employeeMail ?? '-',
    projectName:
      overview.projects && overview.projects.length > 0
        ? overview.projects.map((project) => project.name).join(', ')
        : '-',
    clientName:
      overview.projects && overview.projects.length > 0
        ? overview.projects.map((project) => project.accountName).join(', ')
        : '-',
    overallRating:
      overview.overallRating && overview.reviewersCount
        ? `${overview.overallRating} (${overview.reviewersCount})`
        : '-',
    feedbackDate: overview.feedbackDate
      ? dayjs(overview.feedbackDate).format(DATE_FORMAT)
      : '-',
  }))
