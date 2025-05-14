import React from 'react'
import { FeedbackTableHeadProps } from './types'
import { tableHead, headRow } from '@/styles/tableStyles'
import { TableHead, TableRow } from '@mui/material'
import { feedbackTableColumns } from '../const'
import { renderTableCells } from '@/utils/tableUtils'

const FeedbackTableHead = ({ orderBy, onSort }: FeedbackTableHeadProps) => {
  const columnsConfig = feedbackTableColumns()

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

export default FeedbackTableHead
