import { TableColumn } from './types'

export const accountsProjectsTableColumns = () => {
  const columns = [
    { headerId: 'name', headerName: 'Name', paddingLeft: true },
    { headerId: 'reporter', headerName: 'Reporter' },
    { headerId: 'dateOfReport', headerName: 'Last Report' },
  ] as {
    headerId: keyof TableColumn
    headerName: string
    paddingLeft?: boolean
  }[]

  return columns
}
