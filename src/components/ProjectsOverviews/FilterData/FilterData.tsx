// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Box, Button, Chip } from '@mui/material'
import dayjs from 'dayjs'
import { zodResolver } from '@hookform/resolvers/zod'
import ControlledSearchDatePicker from '@/components/ControlledSearchDatePicker/ControlledSearchDatePicker'
import { searchBox, searchFiltersBox } from '@/styles/formStyles'
import { outlinedButtonGray } from '@/styles/buttonsStyles'
import {
  FormSchemaFilter,
  schema,
} from '@/components/ProjectsOverviews/FilterData/validation'
import { ProjectsFilters } from '../../ProjectsOverviews/types'
import useLocalStorageFilters from '@/components/Hooks/UseLocalStorageFilters'
import { DATE_FORMAT } from '@/constants/dateFormats'
import ControlledFormSelect from '@/components/ControlledFormSelect'
import { getOptions, getOptionsForEmployees } from './utils'
import { Account, Project, Employee } from './types'

interface Props {
  filters: ProjectsFilters
  setFilters: Dispatch<SetStateAction<ProjectsFilters>>
  isOverviews?: boolean
  isAccountReviews?: boolean
  accounts: Account[]
  projects: Project[]
  employees?: Employee[]
}

const FilterData = ({
  filters,
  setFilters,
  isOverviews,
  isAccountReviews,
  accounts,
  projects,
  employees,
}: Props) => {
  const LOCAL_STORAGE_KEY = isOverviews ? 'projectFilters' : 'accountFilters'
  const [hasInteracted, setHasInteracted] = useState(false)
  const [storedFilters, setStoredFilters] = useLocalStorageFilters({
    key: LOCAL_STORAGE_KEY,
    initialValue: filters,
  })

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormSchemaFilter>({
    resolver: zodResolver(schema),
  })

  useEffect(() => {
    setValue('isActive', storedFilters.isActive)
  }, [setValue, storedFilters])

  useEffect(() => {
    setStoredFilters((prevFilters) => ({
      ...prevFilters,
      isActive: filters.isActive,
    }))
  }, [filters.isActive, setStoredFilters])

  const fields = () => {
    const fieldsArray = isAccountReviews
      ? [
          { fieldName: 'accountNames', title: 'Account' },
          { fieldName: 'projectNames', title: 'Project' },
          { fieldName: 'reporters', title: 'Reporter' },
        ]
      : isOverviews
      ? [
          { fieldName: 'accountNames', title: 'Account' },
          { fieldName: 'projectNames', title: 'Project' },
          { fieldName: 'reporters', title: 'Reporter' },
          { fieldName: 'reportDateStart', title: 'Report - Start Date' },
          { fieldName: 'reportDateEnd', title: 'Report - End Date' },
        ]
      : [
          { fieldName: 'accountNames', title: 'Account' },
          { fieldName: 'projectNames', title: 'Project' },
          { fieldName: 'reportDateStart', title: 'Report - Start Date' },
          { fieldName: 'reportDateEnd', title: 'Report - End Date' },
        ]
    return fieldsArray
  }

  const postFormData = handleSubmit((data: FormSchemaFilter) => {
    const dataFormat: Partial<ProjectsFilters> = Object.keys(data).reduce(
      (acc, key) => {
        const value = data[key as keyof FormSchemaFilter]
        const storedValue = storedFilters[key as keyof ProjectsFilters]

        if (
          key === 'accountNames' ||
          key === 'projectNames' ||
          key === 'reporters'
        ) {
          const updatedValues = [
            ...(Array.isArray(storedValue)
              ? storedValue
              : storedValue
              ? [storedValue]
              : []),
            ...(Array.isArray(value) ? value : value ? [value] : []),
          ].filter((val, index, arr) => val && arr.indexOf(val) === index)

          if (updatedValues.length > 0) {
            acc[key as keyof ProjectsFilters] = updatedValues
          }
        } else {
          if (key === 'isActive') {
            acc['isActive'] = filters.isActive
          } else if (value) {
            const formattedDate = Array.isArray(value)
              ? dayjs(value[0]).format('YYYY-MM-DD')
              : dayjs(value).format('YYYY-MM-DD')
            acc[key as keyof ProjectsFilters] = formattedDate
          } else if (storedValue) {
            acc[key as keyof ProjectsFilters] = storedValue
          }
        }

        return acc
      },
      {} as Partial<ProjectsFilters>
    )

    setStoredFilters((prev) => ({
      ...prev,
      ...dataFormat,
      isActive: filters.isActive,
    }))
    setFilters((prev) => ({
      ...prev,
      ...dataFormat,
      isActive: filters.isActive,
    }))
    reset()
  })

  const handleDeleteFilter = (
    filter: keyof ProjectsFilters,
    specificValue?: string
  ) => {
    const updatedFieldValues =
      (storedFilters[filter] as unknown as string[]) || []

    if (specificValue) {
      const newValues = updatedFieldValues.filter(
        (val: string) => val !== specificValue
      )

      const activeFilters: ProjectsFilters = {
        ...storedFilters,
        [filter]: newValues.length > 0 ? newValues : undefined,
      }

      setFilters(activeFilters)
      setStoredFilters(activeFilters)
    } else {
      const activeFilters = { ...storedFilters }
      delete activeFilters[filter]

      setFilters(activeFilters as ProjectsFilters)
      setStoredFilters(activeFilters as ProjectsFilters)
    }
  }

  const getActiveFilters = () => {
    return Object.entries(storedFilters).filter(([key, value]) => {
      if (Array.isArray(value)) {
        return value.length > 0
      }

      if (key === 'reportDateStart' || key === 'reportDateEnd') {
        if (value) {
          const date = dayjs(value)
          if (date.isValid()) {
            storedFilters[key] = date.format('YYYY-MM-DD')
          } else {
            console.warn(`Invalid date for key: ${key}, value: ${value}`)
            storedFilters[key] = undefined
          }
        }
      }

      return (
        key !== 'isActive' &&
        value !== undefined &&
        value !== '' &&
        fields().some((field) => field.fieldName === key)
      )
    })
  }

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && hasInteracted) {
        const activeElement = document.activeElement as HTMLElement
        const formElement = document.querySelector('form')

        if (
          formElement?.contains(activeElement) &&
          (activeElement.tagName === 'INPUT' ||
            activeElement.tagName === 'TEXTAREA')
        ) {
          event.preventDefault()
          postFormData()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  })

  const handleRemoveFiltersClick = () => {
    const { isActive } = storedFilters
    const updatedFilters = { isActive }
    setFilters(updatedFilters as ProjectsFilters)
    setStoredFilters(updatedFilters)
    reset()
  }

  const handleFieldFocus = () => {
    setHasInteracted(true)
  }

  const datePickerFields = fields().filter((field) =>
    ['reportDateStart', 'reportDateEnd'].includes(field.fieldName)
  )
  const inputFields = fields().filter((field) =>
    ['reporters'].includes(field.fieldName)
  )

  const selectAccountField = fields().filter((field) =>
    ['accountNames'].includes(field.fieldName as string)
  )

  const selectProjectField = fields().filter((field) =>
    ['projectNames'].includes(field.fieldName as string)
  )

  const renderForm = () => {
    return (
      <form onSubmit={postFormData}>
        <Box
          sx={{
            ...searchBox,
            flexWrap: 'wrap',
          }}
        >
          {selectAccountField.map((field) => (
            <ControlledFormSelect
              key={`${field.fieldName}-${filters.accountName}`}
              control={control}
              errors={errors}
              name={field.fieldName as keyof FormSchemaFilter}
              label={field.title}
              options={getOptions(accounts)}
              onFocus={handleFieldFocus}
              onBlur={postFormData}
              freeSolo
            />
          ))}

          {selectProjectField.map((field) => (
            <ControlledFormSelect
              key={`${field.fieldName}-${filters.name}`}
              control={control}
              errors={errors}
              name={field.fieldName as keyof FormSchemaFilter}
              label={field.title}
              options={getOptions(projects)}
              onFocus={handleFieldFocus}
              onBlur={postFormData}
              freeSolo
            />
          ))}

          {inputFields.map((field) => (
            <ControlledFormSelect
              key={`${field.title}`}
              control={control}
              errors={errors}
              name={field.fieldName as keyof FormSchemaFilter}
              label={field.title}
              options={getOptionsForEmployees(employees)}
              onFocus={handleFieldFocus}
              onBlur={postFormData}
              freeSolo
            />
          ))}
          {datePickerFields.map((field) => (
            <ControlledSearchDatePicker
              key={field.fieldName}
              control={control}
              errors={errors}
              name={field.fieldName as keyof FormSchemaFilter}
              title={field.title}
              onFocus={handleFieldFocus}
              onBlur={postFormData}
            />
          ))}
        </Box>
      </form>
    )
  }

  const renderFilterChips = () => {
    const activeFilters = getActiveFilters()
    if (activeFilters.length === 0) return null

    return (
      <Box
        sx={{
          ...searchFiltersBox,
          paddingLeft: 1,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
          minHeight: 'auto',
        }}
      >
        {activeFilters.map(([key, value]) => {
          const field = fields().find((item) => item.fieldName === key)
          if (key === 'reportDateStart' || key === 'reportDateEnd') {
            const formattedDate = dayjs(value).format(DATE_FORMAT)
            return (
              <Chip
                key={key}
                label={`${field?.title}: ${formattedDate}`}
                onDelete={() =>
                  handleDeleteFilter(key as keyof ProjectsFilters)
                }
                size="small"
                sx={{ minWidth: 'auto' }}
              />
            )
          }

          if (
            ['projectNames', 'accountNames', 'reporters'].includes(key) &&
            Array.isArray(value)
          ) {
            return value.map((val: string) => (
              <Chip
                key={`${key}-${val}`}
                label={`${field?.title}: ${val}`}
                onDelete={() =>
                  handleDeleteFilter(key as keyof ProjectsFilters, val)
                }
                size="small"
                sx={{ maxWidth: 'auto' }}
              />
            ))
          }

          return field ? (
            <Chip
              key={key}
              label={`${field.title}: ${value}`}
              onDelete={() => handleDeleteFilter(key as keyof ProjectsFilters)}
              size="small"
              sx={{ minWidth: 'auto' }}
            />
          ) : null
        })}

        {Object.keys(storedFilters).length > 0 ? (
          <Button
            variant="outlined"
            onClick={handleRemoveFiltersClick}
            sx={{ ...outlinedButtonGray, width: 'auto', minWidth: 134 }}
          >
            Remove Filters
          </Button>
        ) : null}
      </Box>
    )
  }

  return (
    <>
      {renderForm()}
      {renderFilterChips()}
    </>
  )
}

export default FilterData
