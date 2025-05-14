import { TableColumn } from './types'

export const employeeTableColumns = () => {
  const columns = [
    {
      headerId: 'employee',
      headerName: 'Employee',
      paddingLeft: true,
    },
    { headerId: 'projectName', headerName: 'Project', sortable: false },
    { headerId: 'clientName', headerName: 'Account', sortable: false },
    { headerId: 'feedbackDate', headerName: 'Last Feedback Date' },
    { headerId: 'overallRating', headerName: 'Last Feedback Rating' },
  ] as {
    headerId: keyof TableColumn
    headerName: string
    paddingLeft?: boolean
    sortable?: boolean
  }[]
  columns.forEach((column) => {
    if (column.sortable === undefined) {
      column.sortable = true
    }
  })

  return columns
}
