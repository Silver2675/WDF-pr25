import { TableColumn } from './types'

export const feedbackTableColumns = () => {
  const columns = [
    { headerId: 'employee', headerName: 'Employee', paddingLeft: true },
    { headerId: 'projectName', headerName: 'Project' },
    { headerId: 'clientName', headerName: 'Account' },
    { headerId: 'coordinator', headerName: 'Author' },
    { headerId: 'feedbackDate', headerName: 'Date' },
    // { headerId: 'reviewType', headerName: 'Review Type' },
    { headerId: 'feedbackType', headerName: 'Feedback Type' },
    { headerId: 'overallRating', headerName: 'Overall' },
  ] as {
    headerId: keyof TableColumn
    headerName: string
    paddingLeft?: boolean
  }[]

  return columns
}
