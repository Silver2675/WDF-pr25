import React from 'react'
import { routes } from '@/constants/routes'
import { rowStyle, cellStyle } from '@/styles/tableStyles'
import { TableBody, TableRow, TableCell } from '@mui/material'
import { useRouter } from 'next/navigation'
import { tableDataOverviews } from '../utils'
import { feedbackTableColumns } from '../const'
import { tableBodyProps } from './types'

const FeedbackTableBody = ({ overviews }: tableBodyProps) => {
  const router = useRouter()

  const tableData = tableDataOverviews(overviews)
  const columnsConfig = feedbackTableColumns()

  return (
    <TableBody>
      {tableData?.map((feedback) => (
        <TableRow
          hover={true}
          onClick={() =>
            router.push(routes.feedback((feedback.feedbackId ?? 0).toString()))
          }
          key={feedback.id ? 0 : feedback.feedbackId ?? 0}
          sx={rowStyle}
        >
          {columnsConfig.map((column, index) => (
            <TableCell
              key={`cell-${
                feedback.id ? 0 : feedback.feedbackId ?? 0
              }-${index}`}
              sx={{
                ...cellStyle,
                paddingLeft: column.paddingLeft ? 2.5 : '',
                paddingRight: columnsConfig.length - index == 1 ? 2.5 : '',
              }}
            >
              {feedback[column.headerId as keyof typeof feedback]}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  )
}

export default FeedbackTableBody
