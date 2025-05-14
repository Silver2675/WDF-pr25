import { headRow, tableHead } from '@/styles/tableStyles'
import { TableHead, TableRow } from '@mui/material'
import React from 'react'
import { accountsTableColumns } from '../const'
import { renderTableCells } from '@/utils/tableUtilsNoSort'

const AccountsTableHead = () => {
  const columnsConfig = accountsTableColumns()

  return (
    <TableHead sx={tableHead}>
      <TableRow sx={headRow}>{renderTableCells({ columnsConfig })}</TableRow>
    </TableHead>
  )
}

export default AccountsTableHead
