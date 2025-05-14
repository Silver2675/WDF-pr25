'use client'

import React, { useEffect, useState, Fragment } from 'react'
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
import { request } from '@/server/backend/types/request'
import { apiUrls } from '@/constants/apiUrls'
import { getOptions } from './utils'
import { formErrors, formInputLabel } from '@/styles/formStyles'
import { OptionItem, TeamLeader } from './types'

interface ControlledChipInputProps<
  T extends FieldValues,
  N extends FieldPath<T>
> {
  control: Control<T>
  name: N
  accountId?: number
  label: string
  errors?: FieldErrors<T>
  required?: boolean
  currentTeamLeaders?: TeamLeader[]
}

const TeamLeaderOptions = <T extends FieldValues, N extends FieldPath<T>>({
  control,
  name,
  accountId,
  label,
  errors,
  required = false,
  currentTeamLeaders,
}: ControlledChipInputProps<T, N>) => {
  const [teamLeaders, setTeamLeaders] = useState<TeamLeader[]>([])
  const [selectedTeamLeaders, setSelectedTeamLeaders] = useState<OptionItem[]>(
    []
  )
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchTeamLeaders = async () => {
      setLoading(true)
      const requestParams: {
        url: string
        method: 'GET'
        query?: { accountId: string }
      } = {
        url: apiUrls.employeesName,
        method: 'GET',
      }
      if (accountId !== undefined) {
        requestParams.query = { accountId: String(accountId) }
      }

      const { ok, response } = await request<TeamLeader[]>(requestParams)
      if (ok && response) {
        setTeamLeaders(response)
      }
      setLoading(false)
    }
    fetchTeamLeaders()
  }, [accountId])

  useEffect(() => {
    if (currentTeamLeaders) {
      setSelectedTeamLeaders(
        currentTeamLeaders.map((leader) => ({
          label: `${leader.givenName} ${leader.surname}`,
          value: leader.id,
        }))
      )
    }
  }, [currentTeamLeaders])

  return (
    <Controller
      control={control}
      name={name}
      rules={{ required }}
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
            options={getOptions(teamLeaders)}
            getOptionLabel={(option) => option.label}
            value={selectedTeamLeaders}
            loading={loading}
            isOptionEqualToValue={(option, value) =>
              option.value === value.value
            }
            onChange={(event, newValue) => {
              setSelectedTeamLeaders(newValue)
              onChange(newValue.map((member) => member.value))
            }}
            renderTags={(selected, getTagProps) =>
              selected.map((option, index) => (
                <Chip
                  label={option.label}
                  {...getTagProps({ index })}
                  key={option.value}
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
                helperText={errors?.[name]?.message?.toString()}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <Fragment>
                      {loading ? (
                        <CircularProgress color="inherit" size={16} />
                      ) : null}
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

export default TeamLeaderOptions
