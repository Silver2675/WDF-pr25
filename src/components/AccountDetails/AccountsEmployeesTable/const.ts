import { TableColumn } from './types'

export const accountsEmployeesTableColumns = () => {
  const columns = [
    { headerId: 'name', headerName: 'Name', paddingLeft: true },
    { headerId: 'mail', headerName: 'E-mail' },
    { headerId: 'jobTitle', headerName: 'Position' },
    { headerId: 'projectNames', headerName: 'Current Projects' },
  ] as {
    headerId: keyof TableColumn
    headerName: string
    paddingLeft?: boolean
  }[]

  return columns
}
