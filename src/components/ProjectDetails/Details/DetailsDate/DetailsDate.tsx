import React from 'react'
import { Controller, FieldPath, FieldValues } from 'react-hook-form'
import {
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material'
import { detailsInputLabel, selectStandard } from '@/styles/styles'
import { DetailsDateProps } from './types'
import ControlledDatePicker from '@/components/ControlledDatePicker'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

const DetailsDate = <T extends FieldValues, N extends FieldPath<T>>({
  projectReport,
  setCurrentReportId,
  reportsDates,
  index,
  reportId,
  control,
  errors,
  readOnlyElement,
  titleName,
  titleId,
}: DetailsDateProps<T, N>) => {
  const handleChangeReport = (e: SelectChangeEvent) => {
    setCurrentReportId?.(parseInt(e.target.value))
  }

  switch (readOnlyElement) {
    case 'EDITING_INFORMATION':
      return (
        <React.Fragment key={`fragment-fields-${titleName}-${reportId}`}>
          <InputLabel
            key={`details-fields-${reportId}-${titleName}`}
            sx={detailsInputLabel}
          >
            {titleName}
          </InputLabel>
          <TextField
            variant="standard"
            value={dayjs(projectReport?.dateOfReport, 'YYYY-MM-DD').format(
              'YYYY-MM-DD'
            )}
          />
        </React.Fragment>
      )

    case 'ADD_REPORT':
    case 'EDITING_REPORT':
      return (
        <ControlledDatePicker
          control={control}
          errors={errors}
          name={titleId}
          label={titleName}
          message="Required"
          useFormattedDate={false}
          value={projectReport?.dateOfReport}
        />
      )

    default:
      return (
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <React.Fragment key={`fragment-fields-${titleName}-${reportId}`}>
              <InputLabel
                key={`details-fields-${reportId}-${titleName}`}
                sx={detailsInputLabel}
              >
                {titleName}
              </InputLabel>
              <Select
                {...field}
                variant="standard"
                key={`label-${titleId}-${index}`}
                sx={{
                  ...selectStandard,
                  width: { md: 'fill-available', xs: 180 },
                }}
                value={String(projectReport?.id)}
                onChange={handleChangeReport}
              >
                {reportsDates?.map((item) => (
                  <MenuItem key={`report-date-${item.id}`} value={item.id}>
                    {dayjs(item.dateOfReport, 'YYYY-MM-DD').format('YYYY-MM-DD')}
                  </MenuItem>
                ))}
              </Select>
            </React.Fragment>
          )}
          name={titleId}
        />
      )
  }
}

export default DetailsDate
