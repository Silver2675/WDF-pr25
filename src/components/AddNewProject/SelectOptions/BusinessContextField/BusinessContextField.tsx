import React from 'react'
import { BusinessContextFieldProps } from './types'
import { InputLabel, TextField, Typography } from '@mui/material'
import { formErrors, formInputLabel } from '@/styles/formStyles'
import { Controller, FieldValues } from 'react-hook-form'

const BusinessContextField = <T extends FieldValues>({ control, errors, name }: BusinessContextFieldProps<T>) => {
  return (
    <Controller 
        control={control}
        name={name}
        render={({ field }) => (
            <>
              <InputLabel sx={formInputLabel}>Business Context</InputLabel>
              <TextField 
                {...field}
                multiline
                
                variant='standard'
                error={!!errors?.businessContext}
                fullWidth
              />
              {errors?.businessContext && (
                <Typography className="error" sx={formErrors}>
                    {errors.businessContext.message?.toString()}
                </Typography>
              )}
            </>
        )}
    />
  )
}

export default BusinessContextField