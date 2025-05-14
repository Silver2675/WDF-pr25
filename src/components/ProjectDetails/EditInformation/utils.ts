import { BasicInformation, Team } from '../types'

export const informationDefaultValues = (
  information: BasicInformation,
  team: Team
) => ({
  employeeId: {
    label: `${information?.reporter.givenName} ${information?.reporter.surname}`,
    value: information?.reporter.id,
  },
  reportingFrequency: {
    label:
      information.reportingFrequency === 7
        ? '1 week'
        : `${information?.reportingFrequency / 7} weeks`,
    value: information.reportingFrequency,
  },
  dateOfReview: information?.terminationDate || '',
  technologies: information?.technologies || [],
  businessContext: information?.businessContext || '',
  teamLeaders: team.teamLeaders.map((leader) => leader.id),
  teamMembers: team.teamMembers.map((member) => member.id),
})
