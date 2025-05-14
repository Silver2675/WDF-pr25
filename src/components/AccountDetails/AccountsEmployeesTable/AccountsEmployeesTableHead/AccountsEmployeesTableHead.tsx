import { headRow, tableHead } from '@/styles/tableStyles'
import { TableHead, TableRow } from '@mui/material'
import React from 'react'
import { accountsEmployeesTableColumns } from '../const'
import { renderTableCells } from '@/utils/tableUtilsNoSort'

const AccountsEmployeesTableHead = () => {
  const columnsConfig = accountsEmployeesTableColumns()

  return (
    <TableHead sx={tableHead}>
      <TableRow sx={headRow}>{renderTableCells({ columnsConfig })}</TableRow>
    </TableHead>
  )
}

export default AccountsEmployeesTableHead
