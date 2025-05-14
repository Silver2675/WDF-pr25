import React from 'react'
import { SxProps } from '@mui/system'
import { TableCell } from '@mui/material'
import { headCells } from '@/styles/tableStyles'

interface ColumnConfig {
  headerId: string
  headerName: string
  paddingLeft?: boolean
}

interface RenderTableCellsProps {
  columnsConfig: ColumnConfig[]
}

export const renderTableCells = ({ columnsConfig }: RenderTableCellsProps) => {
  return columnsConfig.map((column) => {
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
        {column.headerName}
      </TableCell>
    )
  })
}
