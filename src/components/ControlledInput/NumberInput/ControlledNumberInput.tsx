import { formErrors } from '@/styles/formStyles'
import { InputLabel, TextField, Typography } from '@mui/material'
import React from 'react'
import { FieldValues, FieldPath, Controller } from 'react-hook-form'
import { NumberInputProps } from './types'
import { detailsInputLabel } from '@/styles/styles'

const ControlledNumberInput = <T extends FieldValues, N extends FieldPath<T>>({
  control,
  name,
  errors,
  value,
  readOnly,
  label,
  id,
}: NumberInputProps<T, N>) => {
  return (
    <Controller
      control={control}
      key={name}
      render={({ field }) => (
        <>
          <InputLabel
            key={`details-fields-${id}-${label}`}
            sx={{
              ...detailsInputLabel,
              display: !value && readOnly ? 'none' : 'block',
            }}
          >
            {label}
          </InputLabel>
          <TextField
            {...field}
            variant="standard"
            key={`number-input-${name}`}
            value={field.value ?? (value || '')}
            onChange={(e) => field.onChange(e)}
            error={!!errors?.[name]}
            type="number"
            sx={{ display: !value && readOnly ? 'none' : 'block' }}
            InputProps={{
              inputProps: { min: 0 },
              readOnly: readOnly,
            }}
          />
          {errors?.[name] && (
            <Typography key={`error-${name}`} className="error" sx={formErrors}>
              {errors[name]?.message?.toString()}
            </Typography>
          )}
        </>
      )}
      name={name}
    />
  )
}

export default ControlledNumberInput
