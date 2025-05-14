import { AccountsEmployeesOverview, TableColumn } from './types'

export const tableDataOverviews = (
  overviews?: AccountsEmployeesOverview[]
): TableColumn[] | undefined =>
  overviews?.map((overview) => ({
    id: overview.id ?? '-',
    name:
      overview.givenName && overview.surname
        ? `${overview.givenName} ${overview.surname}`
        : '-',
    mail: overview.mail ? overview.mail : '-',
    projectNames:
      overview.projectNames && overview.projectNames.length > 0
        ? overview.projectNames
        : [],
    jobTitle: overview.jobTitle ? overview.jobTitle : '-',
    givenName: overview.givenName ? overview.givenName : '-',
    surname: overview.surname ? overview.surname : '-',
  }))
