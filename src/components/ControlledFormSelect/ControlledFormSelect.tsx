import {
  InputLabel,
  CircularProgress,
  Box,
  TextField,
  Autocomplete,
  Typography,
} from '@mui/material'
import React from 'react'
import { FieldValues, FieldPath, Controller } from 'react-hook-form'
import { formInputLabel, formErrors } from '@/styles/formStyles'
import { ControlledSelectProps } from './types'

const ControlledFormSelect = <T extends FieldValues, N extends FieldPath<T>>({
  control,
  name,
  label,
  errors,
  options,
  onFocus,
  onBlur,
  onSelect,
  disabled = false,
  loading = false,
}: ControlledSelectProps<T, N> & {
  options: Array<{ label: string; value: string }>
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Box>
          <InputLabel
            sx={{ ...formInputLabel, paddingBottom: 1 }}
            id={`${name}-label`}
          >
            {label}
          </InputLabel>
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Autocomplete
              {...field}
              freeSolo
              disableClearable
              options={options.map((option) => option.label)}
              value={
                options.find((option) => option.value === field.value)?.label ||
                ''
              }
              onChange={(event, newValue) => {
                const selectedOption = options.find(
                  (option) => option.label === newValue
                )
                field.onChange(selectedOption ? selectedOption.value : newValue)
              }}
              onInputChange={(event, newInputValue) => {
                field.onChange(newInputValue)
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  onFocus={onFocus}
                  onSelect={onSelect}
                  onBlur={(e) =>
                    e.target.value !== '' ? onBlur && onBlur() : null
                  }
                  disabled={disabled}
                  error={!!errors?.[name]}
                  size="small"
                  sx={{
                    width: '135px',
                    padding: 0,
                  }}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {loading ? (
                          <CircularProgress color="inherit" size={16} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  }}
                />
              )}
            />
          </Box>
          {errors?.[name] && (
            <Typography key={`error-${name}`} className="error" sx={formErrors}>
              {errors[name]?.message?.toString()}
            </Typography>
          )}
        </Box>
      )}
    />
  )
}

export default ControlledFormSelect
