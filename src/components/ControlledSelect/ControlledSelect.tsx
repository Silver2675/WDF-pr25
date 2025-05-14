import React, { useState, Fragment } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { FieldPath, FieldValues, Controller } from 'react-hook-form'
import { InputLabel, Autocomplete, TextField, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { formErrors } from '@/styles/formStyles'
import { RenderOptionType, ControlledSelectProps } from './types'
import { emptyOption } from './const'

const defaultRenderOption: RenderOptionType = (props, option) => (
  <li {...props} key={option.label + option.value}>
    {option.label}
  </li>
)

const ControlledSelect = <T extends FieldValues, N extends FieldPath<T>>({
  options,
  control,
  name,
  label,
  errors,
  loading,
  detailsStyles,
  required,
  renderOption = defaultRenderOption,
  defaultValue,
  disabled = false,
  freeSolo = false,
  onFocus,
}: ControlledSelectProps<T, N>) => {
  const [open, setOpen] = useState(false)

  return (
    <Controller
      control={control}
      rules={{
        required: required,
      }}
      render={({ field }) => (
        <>
          <InputLabel sx={detailsStyles}>{label}</InputLabel>
          <Autocomplete
            {...field}
            key={`controlled-select-${name}`}
            options={options}
            open={open}
            freeSolo={freeSolo}
            value={field.value || defaultValue || emptyOption}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            noOptionsText={loading ? 'Loading...' : 'No results'}
            onChange={(e, option) => {
              if (!option) {
                field.onChange(null)
              } else if (typeof option === 'string') {
                field.onChange({ label: option, value: option })
              } else if (option && typeof option === 'object') {
                field.onChange(option)
              }
            }}
            onInputChange={(e, value) => {
              if (freeSolo) {
                field.onChange({ label: value, value })
              }
            }}
            getOptionLabel={(option) =>
              typeof option === 'string' ? option : option.label
            }
            isOptionEqualToValue={(option, input) =>
              option.label + option.value === input.label + input.value
            }
            renderOption={renderOption}
            popupIcon={
              <KeyboardArrowDownIcon
                color={!!errors?.[name] ? 'error' : 'inherit'}
              />
            }
            renderInput={(params) => (
              <TextField
                {...params}
                key={`text-field-${name}`}
                variant="standard"
                error={!!errors?.[name]}
                onFocus={onFocus}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <Fragment>
                      {open && loading && (
                        <CircularProgress color="inherit" size={16} />
                      )}
                      {params.InputProps.endAdornment}
                    </Fragment>
                  ),
                }}
                disabled={disabled}
              />
            )}
            disabled={disabled}
          />
          {errors?.[name] && (
            <Typography className="error" sx={formErrors}>
              {errors[name]?.message?.toString()}
            </Typography>
          )}
        </>
      )}
      name={name}
    />
  )
}

export default ControlledSelect
