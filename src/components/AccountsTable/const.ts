import { TableColumn } from './types'

export const accountsTableColumns = () => {
  const columns = [
    { headerId: 'name', headerName: 'Name', paddingLeft: true },
    {
      headerId: 'deliveryManager',
      headerName: 'Delivery Manager',
      paddingLeft: true,
    },
  ] as {
    headerId: keyof TableColumn
    headerName: string
    paddingLeft?: boolean
  }[]

  return columns
}
