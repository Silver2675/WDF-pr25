import React from 'react'
import { formErrors, formInputLabel } from '@/styles/formStyles'
import { InputLabel, TextField, Typography } from '@mui/material'
import { Controller } from 'react-hook-form'
import { WebsiteFieldProps } from './types'

const WebsiteField = ({ control, errors }: WebsiteFieldProps) => {
  return (
    <Controller
      control={control}
      name="website"
      render={({ field }) => (
        <>
          <InputLabel sx={formInputLabel}>Website</InputLabel>
          <TextField
            {...field}
            variant="standard"
            error={!!errors?.website}
            sx={formInputLabel}
          />
          {errors?.website && (
            <Typography className="error" sx={formErrors}>
              {errors.website.message?.toString()}
            </Typography>
          )}
        </>
      )}
    />
  )
}

export default WebsiteField
