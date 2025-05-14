import React from 'react'
import { SxProps } from '@mui/system'
import { TableCell, TableSortLabel } from '@mui/material'
import SortIcon from '@mui/icons-material/Sort'
import { headCells } from '@/styles/tableStyles'

interface ColumnConfig {
  headerId: string
  headerName: string
  paddingLeft?: boolean
  sortable?: boolean
}

interface RenderTableCellsProps {
  columnsConfig: ColumnConfig[]
  orderBy: string
  handleSort: (headerId: string) => void
}

export const renderTableCells = ({
  columnsConfig,
  orderBy,
  handleSort,
}: RenderTableCellsProps) => {
  return columnsConfig.map((column) => {
    const isActiveSort =
      orderBy.startsWith(column.headerId) &&
      (orderBy === `${column.headerId} asc` ||
        orderBy === `${column.headerId} desc`)

    const direction = isActiveSort
      ? orderBy.endsWith('desc')
        ? 'desc'
        : 'asc'
      : 'asc'

    return (
      <TableCell
        key={column.headerName}
        sx={{
          ...(headCells as SxProps),
          paddingLeft:
            column.headerId === 'email'
              ? '8.9%'
              : column.paddingLeft
              ? 2.5
              : '',
          backgroundColor: 'inherit',
        }}
      >
        {column.sortable !== false ? (
          <TableSortLabel
            active={isActiveSort}
            direction={direction}
            onClick={() => handleSort(column.headerId)}
            sx={{
              color: isActiveSort ? 'black' : 'gray',
            }}
            IconComponent={(props) => (
              <SortIcon
                {...props}
                style={{ color: isActiveSort ? 'black' : 'gray' }}
              />
            )}
          >
            {column.headerName}
          </TableSortLabel>
        ) : (
          column.headerName
        )}
      </TableCell>
    )
  })
}
