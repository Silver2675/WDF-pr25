import { headRow, tableHead } from '@/styles/tableStyles'
import { TableHead, TableRow } from '@mui/material'
import React from 'react'
import { accountsProjectsTableColumns } from '../const'
import { renderTableCells } from '@/utils/tableUtilsNoSort'

const AccountsProjectsTableHead = () => {
  const columnsConfig = accountsProjectsTableColumns()

  return (
    <TableHead sx={tableHead}>
      <TableRow sx={headRow}>{renderTableCells({ columnsConfig })}</TableRow>
    </TableHead>
  )
}

export default AccountsProjectsTableHead
