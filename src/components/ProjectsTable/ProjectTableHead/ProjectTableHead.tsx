import React from 'react'
import { ProjectTableHeadProps } from './types'
import { tableHead, headRow, headCells } from '@/styles/tableStyles'
import { TableHead, TableRow, TableCell } from '@mui/material'
import { projectTableColumns } from '../const'
import { renderTableCells } from '@/utils/tableUtils'

const LOCAL_STORAGE_KEY = 'projectFilters'

const ProjectTableHead = ({
  isOverviews,
  isActive,
  orderBy,
  onSort,
}: ProjectTableHeadProps) => {
  const columnsConfig = projectTableColumns(isActive, isOverviews)

  const handleSort = (headerId: string) => {
    const isAsc = orderBy.startsWith(headerId) && !orderBy.endsWith(' desc')
    const newOrderBy = `${headerId} ${isAsc ? 'desc' : 'asc'}`

    const savedFilters = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (savedFilters) {
      const filters = JSON.parse(savedFilters)
      filters.orderBy = newOrderBy
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filters))
    }

    onSort(newOrderBy)
  }

  return (
    <TableHead sx={tableHead}>
      <TableRow sx={headRow}>
        {renderTableCells({ columnsConfig, orderBy, handleSort })}
        <TableCell
          sx={{ ...headCells, minWidth: 380, maxWidth: 'fit-content' }}
        >
          Overall Status
        </TableCell>
      </TableRow>
    </TableHead>
  )
}

export default ProjectTableHead
