import React, { Dispatch, SetStateAction, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Box, Button, Chip } from '@mui/material'
import dayjs from 'dayjs'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  EmployeeFormSchemaFilter,
  schema as employeeSchema,
} from '@/components/EmployeesOverviews/FilterData/validation'
import ControlledSearchDatePicker from '@/components/ControlledSearchDatePicker/ControlledSearchDatePicker'
import { searchBox, searchFiltersBox } from '@/styles/formStyles'
import { outlinedButtonGray } from '@/styles/buttonsStyles'
import { EmployeeFilters } from '../types'
import useLocalStorageFilters from '@/components/Hooks/UseLocalStorageFilters'
import { Customer } from '@/components/AddNewNote/SelectOptions/CustomerOptions/types'
import {
  getOptionsForCustomers,
  getOptionsForProjects,
  getOptionsForEmployees,
} from './utils'
import ControlledFormSelect from '@/components/ControlledFormSelect'
import { Employee, Project } from './types'
import { DATE_FORMAT } from '@/constants/dateFormats'

interface Props {
  filters: EmployeeFilters
  setFilters: Dispatch<SetStateAction<EmployeeFilters>>
  customers: Customer[]
  projects: Project[]
  employees: Employee[]
}

const FilterData = ({
  filters,
  setFilters,
  customers,
  projects,
  employees,
}: Props) => {
  const [hasInteracted, setHasInteracted] = useState(false)
  const LOCAL_STORAGE_KEY = 'employeesFilters'
  const [storedFilters, setStoredFilters] = useLocalStorageFilters({
    key: LOCAL_STORAGE_KEY,
    initialValue: filters,
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EmployeeFormSchemaFilter>({
    resolver: zodResolver(employeeSchema),
  })

  const fields = () => {
    const fieldsArray = [
      { fieldName: 'employees', title: 'Employee' },
      { fieldName: 'clientNames', title: 'Account' },
      { fieldName: 'projectNames', title: 'Project' },
      { fieldName: 'feedbackStartDate', title: 'Date from' },
      { fieldName: 'feedbackEndDate', title: 'Date to' },
    ]
    return fieldsArray
  }

  const postFormData = handleSubmit((data: EmployeeFormSchemaFilter) => {
    const dataFormat: Partial<EmployeeFilters> = Object.keys(data).reduce(
      (acc, key) => {
        const value = data[key as keyof EmployeeFormSchemaFilter]
        const storedValue = storedFilters[key as keyof EmployeeFilters]

        if (key === 'feedbackStartDate' || key === 'feedbackEndDate') {
          if (value) {
            const formattedDate = Array.isArray(value)
              ? dayjs(value[0]).format('YYYY-MM-DD')
              : dayjs(value).format('YYYY-MM-DD')
            acc[key as keyof EmployeeFilters] = formattedDate
          } else if (storedValue) {
            acc[key as keyof EmployeeFilters] = storedValue
          }
        } else {
          const updatedValues = [
            ...(Array.isArray(storedValue)
              ? storedValue
              : storedValue
              ? [storedValue]
              : []),
            ...(Array.isArray(value) ? value : value ? [value] : []),
          ].filter((val, idx, arr) => val && arr.indexOf(val) === idx)

          if (updatedValues.length > 0) {
            acc[key as keyof EmployeeFilters] = updatedValues as unknown as
              | EmployeeFilters[keyof EmployeeFilters]
              | undefined
          }
        }

        return acc
      },
      {} as Partial<EmployeeFilters>
    )

    setStoredFilters((prev) => ({
      ...prev,
      ...dataFormat,
    }))

    setFilters((prev) => ({
      ...prev,
      ...dataFormat,
    }))

    reset()
  })

  const handleDeleteFilter = (
    filter: keyof EmployeeFilters,
    specificValue?: string
  ) => {
    const updatedFieldValues =
      (storedFilters[filter] as unknown as string[]) || []

    if (specificValue) {
      const newValues = updatedFieldValues.filter(
        (val: string) => val !== specificValue
      )

      const activeFilters: EmployeeFilters = {
        ...storedFilters,
        [filter]: newValues.length > 0 ? newValues : undefined,
      }

      setFilters(activeFilters)
      setStoredFilters(activeFilters)
    } else {
      const activeFilters = { ...storedFilters }
      delete activeFilters[filter]

      setFilters(activeFilters as EmployeeFilters)
      setStoredFilters(activeFilters as EmployeeFilters)
    }
  }

  const getActiveFilters = () => {
    return Object.entries(storedFilters).filter(([key, value]) => {
      if (Array.isArray(value)) {
        return value.length > 0
      }

      if (key === 'feedbackStartDate' || key === 'feedbackEndDate') {
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
    const updatedFilters: Partial<EmployeeFilters> = {}
    setFilters(updatedFilters as EmployeeFilters)
    setStoredFilters(updatedFilters as EmployeeFilters)
    reset()
  }

  const handleFieldFocus = () => {
    setHasInteracted(true)
  }

  const datePickerFields = fields().filter((field) =>
    ['feedbackStartDate', 'feedbackEndDate'].includes(field.fieldName as string)
  )
  const inputFields = fields().filter((field) =>
    ['employees'].includes(field.fieldName as string)
  )

  const selectClientField = fields().filter((field) =>
    ['clientNames'].includes(field.fieldName as string)
  )

  const selectProjectField = fields().filter((field) =>
    ['projectNames'].includes(field.fieldName as string)
  )

  const renderForm = () => {
    return (
      <form onSubmit={postFormData}>
        <Box sx={searchBox}>
          {inputFields.map((field) => (
            <ControlledFormSelect
              key={`${field.title}`}
              control={control}
              errors={errors}
              name={field.fieldName as keyof EmployeeFormSchemaFilter}
              label={field.title}
              options={getOptionsForEmployees(employees)}
              onFocus={handleFieldFocus}
              onBlur={postFormData}
              freeSolo
            />
          ))}
          {selectProjectField.map((field) => (
            <ControlledFormSelect
              key={`${field.fieldName}-${filters.clientName}`}
              control={control}
              errors={errors}
              name={field.fieldName as keyof EmployeeFormSchemaFilter}
              label={field.title}
              options={getOptionsForProjects(projects)}
              onFocus={handleFieldFocus}
              onBlur={postFormData}
              freeSolo
            />
          ))}
          {selectClientField.map((field) => (
            <ControlledFormSelect
              key={`${field.fieldName}-${filters.clientName}`}
              control={control}
              errors={errors}
              name={field.fieldName as keyof EmployeeFormSchemaFilter}
              label={field.title}
              options={getOptionsForCustomers(customers)}
              onFocus={handleFieldFocus}
              onBlur={postFormData}
              freeSolo
            />
          ))}
          {datePickerFields.map((field) => (
            <ControlledSearchDatePicker
              key={field.title}
              control={control}
              errors={errors}
              name={field.fieldName as keyof EmployeeFormSchemaFilter}
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
          if (key === 'feedbackStartDate' || key === 'feedbackEndDate') {
            const formattedDate = dayjs(value).format(DATE_FORMAT)
            return (
              <Chip
                key={key}
                label={`${field?.title}: ${formattedDate}`}
                onDelete={() =>
                  handleDeleteFilter(key as keyof EmployeeFilters)
                }
                size="small"
                sx={{ minWidth: 'auto' }}
              />
            )
          }
          if (
            ['employees', 'projectNames', 'clientNames'].includes(key) &&
            Array.isArray(value)
          ) {
            return value.map((val: string) => (
              <Chip
                key={`${key}-${val}`}
                label={`${field?.title}: ${val}`}
                onDelete={() =>
                  handleDeleteFilter(key as keyof EmployeeFilters, val)
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
              onDelete={() => handleDeleteFilter(key as keyof EmployeeFilters)}
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
