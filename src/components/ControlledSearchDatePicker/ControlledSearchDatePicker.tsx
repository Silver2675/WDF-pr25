import { formErrors } from '@/styles/formStyles'
import { Typography, InputLabel, Box } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import React from 'react'
import {
  FieldValues,
  FieldPath,
  Control,
  FieldErrors,
  Controller,
} from 'react-hook-form'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { formInputLabel, datePicker } from '@/styles/formStyles'
import { DATE_FORMAT } from '@/constants/dateFormats'

export interface Props<T extends FieldValues, N extends FieldPath<T>> {
  control: Control<T>
  name: N
  title: string
  errors?: FieldErrors<T>
  onFocus?: () => void
  onBlur?: () => void
}

const ControlledSearchDatePicker = <
  T extends FieldValues,
  N extends FieldPath<T>
>({
  control,
  name,
  title,
  errors,
  onFocus,
  onBlur,
}: Props<T, N>) => {
  return (
    <Controller
      control={control}
      key={name}
      rules={{ required: false }}
      render={({ field }) => (
        <>
          <Box>
            <InputLabel sx={{ ...formInputLabel, paddingBottom: 1 }}>
              {title}
            </InputLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                {...field}
                onChange={(e) => {
                  field.onChange(e ? dayjs(e as N) : '')
                }}
                key={`date-field-${name}`}
                value={field.value || null}
                format={DATE_FORMAT}
                slots={{
                  openPickerIcon: CalendarMonthOutlinedIcon,
                }}
                slotProps={{
                  openPickerButton: {
                    onBlur: () => (field.value ? onBlur && onBlur() : null),
                  },
                  field: {
                    shouldRespectLeadingZeros: true,
                    onBlur: () => (field.value ? onBlur && onBlur() : null),
                  },
                  textField: {
                    name,
                    variant: 'outlined',
                    size: 'small',
                    error: !!errors?.[name],
                    placeholder: '',
                    onFocus: onFocus,
                    onBlur: () => (field.value ? onBlur && onBlur() : null),

                    InputProps: {
                      sx: {
                        '& .MuiInputAdornment-root': {
                          position: 'relative',
                          top: '3.5px',
                        },
                      },
                      onBlur: () => (field.value ? onBlur && onBlur() : null),
                    },
                  },
                }}
                sx={{
                  ...datePicker,
                  width: '150px',
                  svg: {
                    width: '18px',
                    height: '18px',
                    color: !!errors?.[name] ? 'error.main' : 'inherit',
                  },
                }}
              />
            </LocalizationProvider>
            {errors?.[name] && (
              <Typography
                key={`error-${name}`}
                className="error"
                sx={formErrors}
              >
                {errors[name]?.message?.toString()}
              </Typography>
            )}
          </Box>
        </>
      )}
      name={name}
    />
  )
}

export default ControlledSearchDatePicker
