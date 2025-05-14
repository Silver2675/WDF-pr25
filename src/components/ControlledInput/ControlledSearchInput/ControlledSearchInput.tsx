import { formErrors, formInputLabel } from '@/styles/formStyles'
import {
  TextField,
  Typography,
  InputLabel,
  Box,
  CircularProgress,
} from '@mui/material'
import React from 'react'
import {
  FieldValues,
  FieldPath,
  Control,
  FieldErrors,
  Controller,
} from 'react-hook-form'

export interface Props<T extends FieldValues, N extends FieldPath<T>> {
  control: Control<T>
  name: N
  title: string
  errors?: FieldErrors<T>
  defaultValue?: T[N]
  loading?: boolean
  onFocus?: () => void
  onBlur?: () => void
}

const ControlledSearchInput = <T extends FieldValues, N extends FieldPath<T>>({
  control,
  name,
  title,
  errors,
  defaultValue = '' as T[N],
  loading = false,
  onFocus,
  onBlur,
}: Props<T, N>) => {
  return (
    <Controller
      control={control}
      key={name}
      defaultValue={defaultValue}
      rules={{ required: false }}
      render={({ field }) => (
        <>
          <Box>
            <InputLabel sx={{ ...formInputLabel, paddingBottom: 1 }}>
              {title}
            </InputLabel>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <TextField
                {...field}
                key={`text-field-${name}`}
                variant="outlined"
                value={field.value ?? ''}
                onChange={(e) => {
                  field.onChange(e.target.value)
                }}
                type="text"
                size="small"
                error={!!errors?.[name]}
                sx={{ width: '135px' }}
                disabled={loading}
                onFocus={onFocus}
                onBlur={(e) =>
                  e.target.value !== '' ? onBlur && onBlur() : null
                }
              />
              {loading && (
                <CircularProgress
                  size={16}
                  sx={{ position: 'absolute', right: '10px' }}
                />
              )}
            </Box>
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

export default ControlledSearchInput
