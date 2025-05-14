import React from 'react'
import { EmployeeTableHeadProps } from './types'
import { tableHead, headRow } from '@/styles/tableStyles'
import { TableHead, TableRow } from '@mui/material'
import { employeeTableColumns } from '../const'
import { renderTableCells } from '@/utils/tableUtils'

const EmployeeTableHead = ({ orderBy, onSort }: EmployeeTableHeadProps) => {
  const columnsConfig = employeeTableColumns()

  const handleSort = (headerId: string) => {
    const isAsc = orderBy.startsWith(headerId) && !orderBy.endsWith(' desc')
    const newOrderBy = `${headerId} ${isAsc ? 'desc' : 'asc'}`
    onSort(newOrderBy)
  }

  return (
    <TableHead sx={tableHead}>
      <TableRow sx={headRow}>
        {renderTableCells({ columnsConfig, orderBy, handleSort })}
      </TableRow>
    </TableHead>
  )
}

export default EmployeeTableHead
