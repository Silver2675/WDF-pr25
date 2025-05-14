import React from 'react'
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { InputLabel, Typography } from '@mui/material'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import { Controller, FieldPath, FieldValues } from 'react-hook-form'
import { datePicker, formErrors } from '@/styles/formStyles'
import dayjs from 'dayjs'
import { detailsInputLabel } from '@/styles/styles'
import { ReportDateProps } from './types'
import { DATE_FORMAT } from '@/constants/dateFormats'

const ControlledReviewDatePicker = <
  T extends FieldValues,
  N extends FieldPath<T>
>({
  control,
  errors,
  name,
  label,
  message,
}: ReportDateProps<T, N>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <>
          <InputLabel sx={detailsInputLabel}>{label}</InputLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              {...field}
              onChange={(date) => {
                const formattedDate = date
                  ? dayjs(date).format(DATE_FORMAT)
                  : null
                field.onChange(formattedDate)
              }}
              value={field.value ? dayjs(field.value) : null}
              format={DATE_FORMAT}
              slots={{ openPickerIcon: CalendarMonthOutlinedIcon }}
              slotProps={{
                field: { shouldRespectLeadingZeros: true },
                textField: {
                  name: name,
                  variant: 'standard',
                  error: !!errors?.[name],
                  placeholder: '',
                },
              }}
              sx={{
                ...datePicker,
                svg: {
                  width: '18px',
                  height: '18px',
                  color: !!errors?.[name] ? 'error.main' : 'inherit',
                },
              }}
            />
          </LocalizationProvider>
          {errors?.[name] && (
            <Typography className="error" sx={formErrors}>
              {message}
            </Typography>
          )}
        </>
      )}
    />
  )
}

export default ControlledReviewDatePicker
