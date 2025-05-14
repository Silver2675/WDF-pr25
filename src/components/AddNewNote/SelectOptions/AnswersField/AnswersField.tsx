import { TextField, Typography } from '@mui/material'
import { Controller } from 'react-hook-form'
import { AnswersFieldProps } from './types'
import { formInputLabel, formErrors } from '@/styles/formStyles'
import React from 'react'

const AnswersField = ({ control, errors, disabled }: AnswersFieldProps) => {
  return (
    <Controller
      control={control}
      name="answer"
      rules={{ required: 'Required' }}
      render={({ field }) => (
        <>
          <TextField
            {...field}
            label="Content"
            multiline
            minRows={5}
            variant="standard"
            fullWidth
            error={!!errors?.answer}
            disabled={disabled}
            sx={{ ...formInputLabel, paddingTop: 2 }}
            InputLabelProps={{
              shrink: false,
              sx: {
                fontSize: 13,
                color: 'font.gray',
                '&.Mui-focused': {
                  color: 'font.gray',
                },
                '&.Mui-error': {
                  color: 'font.gray',
                },
                '&.MuiFormLabel-root': {
                  color: 'font.gray',
                },
              },
            }}
            InputProps={{
              style: {
                fontSize: 16,
              },
            }}
          />
          {errors?.answer && (
            <Typography className="error" sx={formErrors}>
              {errors.answer.message?.toString() || 'Required'}
            </Typography>
          )}
        </>
      )}
    />
  )
}

export default AnswersField
