import { detailsInputLabel } from '@/styles/styles'
import { Box, InputLabel, TextField } from '@mui/material'
import React from 'react'
import { NextReportProps } from './types'
import { readOnlyStatus } from '@/components/ProjectDetails/utils'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

const DetailsNextReport = ({
  projectId,
  information,
  readOnlyElement,
  projectReport
}: NextReportProps) => {
  const dateString =
    information?.terminationDate ?? projectReport?.dateOfNextReport

    const dateValue = dayjs(dateString, 'YYYY-MM-DD')
    const today = dayjs().startOf('day')

  const isDateBeforeOrSameAsToday = dateValue.isBefore(today, 'day')

  return (
    <Box
      sx={{
        display: 'inline-flex',
        flexDirection: 'column',
      }}
    >
      <InputLabel
        key={`details-next-report-${projectId}`}
        sx={detailsInputLabel}
      >
        {information?.terminationDate ? 'Termination Date' : 'Next Report'}
      </InputLabel>
      <TextField
        variant="standard"
        key={`next-report-${projectId}`}
        disabled={!readOnlyStatus(readOnlyElement)}
        InputProps={{ readOnly: true }}
        value={dateValue.format('YYYY-MM-DD')}
        sx={{
          input: {
            color: isDateBeforeOrSameAsToday ? '#DD0000' : 'inherit',
          },
        }}
      />
    </Box>
  )
}

export default DetailsNextReport
