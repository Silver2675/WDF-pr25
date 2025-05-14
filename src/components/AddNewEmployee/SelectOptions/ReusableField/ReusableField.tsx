import React from 'react'
import { formErrors, formInputLabel } from '@/styles/formStyles'
import { InputLabel, TextField, Typography } from '@mui/material'
import { Controller } from 'react-hook-form'
import { ReusableFieldProps } from './types'

const ReusableField = ({
  control,
  errors,
  name,
  label,
  type = 'text',
}: ReusableFieldProps) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field }) => (
        <>
          <InputLabel sx={formInputLabel}>{label}</InputLabel>
          <TextField
            {...field}
            type={type}
            variant="standard"
            error={!!errors[name]}
            sx={{ ...formInputLabel, marginBottom: '10px' }}
          />
          {errors[name] && (
            <Typography
              className="error"
              sx={{ ...formErrors, marginTop: '-10px' }}
            >
              {errors[name]?.message?.toString()}
            </Typography>
          )}
        </>
      )}
    />
  )
}

export default ReusableField
