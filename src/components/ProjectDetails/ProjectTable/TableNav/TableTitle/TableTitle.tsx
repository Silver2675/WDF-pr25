import { tableTitle } from '@/styles/tableStyles'
import { Typography } from '@mui/material'
import React from 'react'
import { TableTitleProps } from './types'

const TableTitle = ({ information }: TableTitleProps) => {
  return (
    <Typography sx={tableTitle}>{information.name} Report</Typography>
  )
}
export default TableTitle
