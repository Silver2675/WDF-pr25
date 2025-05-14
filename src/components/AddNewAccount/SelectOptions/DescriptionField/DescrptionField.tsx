import React from 'react'
import { DescriptionFieldProps } from './types'
import { formErrors, formInputLabel } from '@/styles/formStyles'
import { InputLabel, TextField, Typography } from '@mui/material'
import { Controller } from 'react-hook-form'

const DescriptionField = ({ control, errors }: DescriptionFieldProps) => {
  return (
    <Controller
      control={control}
      name="description"
      render={({ field }) => (
        <>
          <InputLabel sx={formInputLabel}>Description</InputLabel>
          <TextField
            {...field}
            variant="standard"
            error={!!errors?.description}
            sx={formInputLabel}
            multiline
            minRows={5}
            fullWidth
          />
          {errors?.description && (
            <Typography className="error" sx={formErrors}>
              {errors.description.message?.toString()}
            </Typography>
          )}
        </>
      )}
    />
  )
}

export default DescriptionField
