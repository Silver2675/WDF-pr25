import {
  DetailsCardsType,
  FirstRow,
  FirstRowDetails,
  StatusDetailsCards,
} from './utils'

export const labelsBasicInfoConfig: {
  labelId: keyof FirstRowDetails
  labelName: string
  frequency?: boolean
}[] = [
  { labelId: 'reporterFullName', labelName: 'Reporter' },
  {
    labelId: 'reportingFrequency',
    labelName: 'Reporting Frequency',
    frequency: true,
  },
  { labelId: 'dateOfFirstReport', labelName: 'Date of First Report' },
  { labelId: 'terminationDate', labelName: 'Termination date' },
  { labelId: 'lastFeedbackDate', labelName: 'Last Feedback' },
]

export const labelsConfig: {
  labelId: keyof FirstRow
  labelName: string
  phase?: boolean
  reportDate?: boolean
}[] = [
  { labelId: 'dateOfReport', labelName: 'Report Date', reportDate: true },
  { labelId: 'projectPhase', labelName: 'Phase', phase: true },
  { labelId: 'teamSize', labelName: 'Team Size' },
]

export const statusCardsConfig: {
  titleId: keyof StatusDetailsCards
  titleName: string
  titleDetails: string
}[] = [
  {
    titleId: 'planTimeStatus',
    titleName: 'Plan Status',
    titleDetails: 'planTimeDetails',
  },
  {
    titleId: 'scopeStatus',
    titleName: 'Scope Status',
    titleDetails: 'scopeDetails',
  },
  {
    titleId: 'costStatus',
    titleName: 'Cost Status',
    titleDetails: 'costDetails',
  },
  {
    titleId: 'riskStatus',
    titleName: 'Risk Status',
    titleDetails: 'riskDetails',
  },
  {
    titleId: 'resourcesStatus',
    titleName: 'Resources Status',
    titleDetails: 'resourcesDetails',
  },
  {
    titleId: 'clientSatisfactionLevelStatus',
    titleName: 'Client Satisfaction Status',
    titleDetails: 'clientSatisfactionLevelDetails',
  },
]

export const cardsConfig: {
  titleId: keyof DetailsCardsType
  titleName: string
  comment?: boolean
}[] = [
  { titleId: 'finishedActivities', titleName: 'Finished Activities' },
  { titleId: 'inProgressActivities', titleName: 'In Progress Activities' },
  { titleId: 'plannedActivities', titleName: 'Planned Activities' },
  { titleId: 'comment', titleName: 'Comments', comment: true },
  { titleId: 'risks', titleName: 'Risks', comment: true },
  { titleId: 'positiveAspects', titleName: 'Positive Aspects', comment: true },
  { titleId: 'currentProblems', titleName: 'Current Problems', comment: true },
  { titleId: 'news', titleName: 'News', comment: true },
  { titleId: 'helpNeeded', titleName: 'Help Needed', comment: true },
  { titleId: 'openBugs', titleName: 'Open Bugs', comment: true },
]
