import { FeedbackOverview } from '../FeedbacksOverviews/types'
import { TableColumn } from './types'

export const tableDataOverviews = (
  overviews?: FeedbackOverview[]
): TableColumn[] | undefined =>
  overviews?.map((overview) => ({
    feedbackId: overview.feedbackId,
    employee: overview.employee,
    projectName: overview.projectName,
    coordinator: overview.coordinator,
    clientName: overview.clientName,
    employeePosition: overview.employeePosition,
    overallRating: `${overview.overallRating} (${overview.reviewersCount})`,
    feedbackDate: overview.feedbackDate,
    feedbackType:
      overview.feedbackType === 'EmployeeToEmployee'
        ? `Employee to Employee`
        : overview.feedbackType === 'EmployeeToTeamLead'
        ? 'Employee to Team Leader'
        : overview.feedbackType === 'TeamLeadToEmployee'
        ? `TL to Employee`
        : overview.feedbackType === 'ClientFeedback'
        ? `Client Feedback`
        : overview.feedbackType === 'SelfFeedback'
        ? `Self Feedback`
        : overview.feedbackType,
    reviewType:
      overview.reviewType === 'TeamFeedback'
        ? `Team`
        : overview.reviewType === 'PersonalFeedback'
        ? `Personal`
        : overview.reviewType === 'Note'
        ? `Note`
        : overview.reviewType,
  }))
