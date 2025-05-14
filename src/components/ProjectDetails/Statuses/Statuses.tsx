import React from 'react'
import Chip from '@mui/material/Chip'
import { StatusesProps } from './types'

export const statusStyles: {
  [key: number | string]: {
    backgroundColor: string
    color: string
    name: string
  }
} = {
  [0]: {
    backgroundColor: 'status.greenFill',
    color: 'status.greenText',
    name: 'Green',
  },
  [1]: {
    backgroundColor: 'status.amberFill',
    color: 'status.amberText',
    name: 'Amber',
  },
  [2]: {
    backgroundColor: 'status.redFill',
    color: 'status.redText',
    name: 'Red',
  },
}

const Statuses = ({ status, reportId, column }: StatusesProps) => {
  return (
    <Chip
      key={`${column}-status-${reportId}-${
        status !== null && status !== undefined ? statusStyles[status]?.name : ''
      }`}
      sx={
        status !== null && status !== undefined
          ? { ...statusStyles[status] }
          : { backgroundColor: 'transparent' }
      }
      label={status !== null && status !== undefined ? statusStyles[status]?.name : ''}
    />
  )
}

export default Statuses
