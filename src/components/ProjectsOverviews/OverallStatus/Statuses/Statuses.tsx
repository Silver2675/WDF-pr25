import React from 'react'
import Chip from '@mui/material/Chip'

interface Props {
  status: number | null | undefined
  name: string
}

const statusStyles: {
  [key: string]: { backgroundColor: string; color: string }
} = {
  [0]: {
    backgroundColor: 'status.greenFill',
    color: 'status.greenText',
  },
  [1]: {
    backgroundColor: 'status.amberFill',
    color: 'status.amberText',
  },
  [2]: {
    backgroundColor: 'status.redFill',
    color: 'status.redText',
  },
}

const Statuses = ({ status, name }: Props) => {
  return status !== null && status !== undefined ? (
    <Chip sx={{ ...statusStyles[status], px: 0, py: 0.75 }} label={name} />
  ) : null
}

export default Statuses
