import { Box } from '@mui/material'
import React from 'react'
import { FieldValues } from 'react-hook-form'
import FormStatuses from '../../GiveReport/Fields/FormStatuses'
import Statuses from '../../Statuses'
import { DetailsStatusesProps } from './types'
import { readOnlyStatus } from '../../utils'

const DetailsStatuses = <T extends FieldValues>({
  projectReport,
  reportId,
  control,
  errors,
  readOnlyElement,
  titleName,
  titleId,
  statuses,
}: DetailsStatusesProps<T>) => {
  return !readOnlyStatus(readOnlyElement) ? (
    <Box sx={{ width: { lg: '30%', md: '40%', xs: '50%' } }}>
      <FormStatuses
        control={control}
        errors={errors}
        labelId={titleId}
        statuses={statuses}
      />
    </Box>
  ) : (
    <Statuses
      key={`middle-${reportId}-${titleId}`}
      reportId={reportId}
      column={titleName}
      status={projectReport?.[titleId] ?? undefined}
    />
  )
}

export default DetailsStatuses
