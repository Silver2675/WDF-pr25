import { AccountsProjectsOverview, TableColumn } from './types'

export const tableDataOverviews = (
  overviews?: AccountsProjectsOverview[]
): TableColumn[] | undefined =>
  overviews?.map((overview) => ({
    id: overview.id ?? '-',
    name: overview.name?.trim() ? overview.name : '-',
    reporter:
      overview.reporterName || overview.reporterSurname
        ? `${overview.reporterName ?? 'null'} ${
            overview.reporterSurname ?? 'null'
          }`
        : '-',
    dateOfReport: overview.dateOfReport ? overview.dateOfReport : '-',
  }))
