import { formErrors } from '@/styles/formStyles'
import { TextField, Typography } from '@mui/material'
import React from 'react'
import { FieldValues, FieldPath, Controller } from 'react-hook-form'
import { TextInputProps } from './types'

const ControlledTextInput = <T extends FieldValues, N extends FieldPath<T>>({
  control,
  name,
  errors,
  value,
  readOnly,
}: TextInputProps<T, N>) => {
  return (
    <Controller
      control={control}
      key={name}
      rules={{
        required: true,
      }}
      render={({ field }) => (
        <>
          <TextField
            {...field}
            key={`text-field-${name}`}
            variant="standard"
            value={field.value ?? (value || '')}
            onChange={(e) => field.onChange(e)}
            type="text"
            multiline
            error={!!errors?.[name]}
            sx={{
              padding: 2,
              display: !value && readOnly ? 'none' : 'flex',
            }}
            InputProps={{
              disableUnderline: true,
              readOnly: readOnly,
            }}
          />
          {errors?.[name] && (
            <Typography
              key={`error-${name}`}
              className="error"
              sx={{ ...formErrors, p: 2 }}
            >
              {errors[name]?.message?.toString()}
            </Typography>
          )}
        </>
      )}
      name={name}
    />
  )
}

export default ControlledTextInput
