import { TableColumn } from './types'

export const projectTableColumns = (
  isActive: boolean,
  isOverviews?: boolean
) => {
  const columns = [
    { headerId: 'accountName', headerName: 'Account', paddingLeft: true },
    { headerId: 'name', headerName: 'Project' },
    { headerId: 'dateOfReport', headerName: 'Current Report' },
    {
      headerId: `${isActive ? 'dateOfNextReport' : 'terminationDate'}`,
      headerName: `${isActive ? 'Next Report' : 'Termination Date'}`,
    },
  ] as {
    headerId: keyof TableColumn
    headerName: string
    paddingLeft?: boolean
  }[]
  if (isOverviews) {
    columns.splice(2, 0, {
      headerId: 'reporterName',
      headerName: 'Reporter',
    })
  }
  return columns
}
