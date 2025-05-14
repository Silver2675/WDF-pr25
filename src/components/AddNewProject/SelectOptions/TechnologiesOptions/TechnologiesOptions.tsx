'use client'

import React, { useState, Fragment } from 'react'
import {
  Controller,
  Control,
  FieldErrors,
  FieldPath,
  FieldValues,
} from 'react-hook-form'
import Chip from '@mui/material/Chip'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import InputLabel from '@mui/material/InputLabel'
import { formErrors, formInputLabel } from '@/styles/formStyles'

interface ControlledChipInputProps<
  T extends FieldValues,
  N extends FieldPath<T>
> {
  control: Control<T>
  name: N
  label: string
  errors?: FieldErrors<T>
  required?: boolean
  currentTechnologies: string[]
}

const TechnologiesOptions = <T extends FieldValues, N extends FieldPath<T>>({
  control,
  name,
  label,
  errors,
  required = false,
  currentTechnologies
}: ControlledChipInputProps<T, N>) => {
  const [inputValue, setInputValue] = useState('')
  const [technologies, setTechnologies] = useState<string[]>(currentTechnologies)

  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: required }}
      defaultValue={[] as unknown as T[N]}
      render={({ field: { onChange } }) => (
        <>
          <InputLabel
            sx={{ ...formInputLabel, marginBottom: '4px', marginTop: '4px' }}
          >
            {label}
          </InputLabel>
          <Autocomplete
            multiple
            options={[]}
            freeSolo
            value={technologies}
            onChange={(event, newValue) => {
              setTechnologies(newValue)
              onChange(newValue)
            }}
            onInputChange={(e, newInputValue) => setInputValue(newInputValue)}
            getOptionLabel={(option) => option}
            renderTags={(selected, getTagProps) =>
              selected.map((option, index) => (
                <Chip
                  label={option}
                  {...getTagProps({ index })}
                  key={index}
                  color="primary"
                  sx={{
                    paddingTop: '13px',
                    paddingBottom: '13px',
                    paddingLeft: '0px',
                    paddingRight: '0px',
                    fontSize: '0.875rem',
                    height: '24px',
                    '& .MuiChip-deleteIcon': {
                      fontSize: '16px',
                      padding: '2px',
                    },
                  }}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                error={!!errors?.[name]}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <Fragment>
                      {technologies.length === 0 && inputValue && (
                        <CircularProgress color="inherit" size={16} />
                      )}
                      {params.InputProps.endAdornment}
                    </Fragment>
                  ),
                }}
              />
            )}
          />
          {errors?.[name] && (
            <Typography className="error" sx={formErrors}>
              {errors[name]?.message?.toString()}
            </Typography>
          )}
        </>
      )}
    />
  )
}

export default TechnologiesOptions

