export interface Body {
  name: number | string
  accountId: number | string
  reporterId: number | string
  dateOfFirstReport: number | string
  reportingFrequency: number | string
  businessContext?: number | string
  technologies?: Array<string>
  teamLeaderIds?: Array<number>
  employeeIds?: Array<number>
}
