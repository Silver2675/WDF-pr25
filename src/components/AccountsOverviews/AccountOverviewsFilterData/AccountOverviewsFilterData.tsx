// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { Dispatch, SetStateAction, useState } from 'react'
import { AccountFilters } from '../types'
import { Account } from './types'
import useLocalStorageFilters from '@/components/Hooks/UseLocalStorageFilters'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AccountFormSchemaFilter, schema as accountSchema } from './validation'
import { Box, Button, Chip } from '@mui/material'
import { searchBox, searchFiltersBox } from '@/styles/formStyles'
import ControlledFormSelect from '@/components/ControlledFormSelect'
import { getOptions } from './utils'
import { outlinedButtonGray } from '@/styles/buttonsStyles'

interface Props {
  filters: AccountFilters
  setFilters: Dispatch<SetStateAction<AccountFilters>>
  accounts: Account[]
}

const AccountOverviewsFilterData = ({
  filters,
  setFilters,
  accounts,
}: Props) => {
  const [hasInteracted, setHasInteracted] = useState(false)
  const LOCAL_STORAGE_KEY = 'accountsFilters'
  const [storedFilters, setStoredFilters] = useLocalStorageFilters({
    key: LOCAL_STORAGE_KEY,
    initialValue: filters,
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AccountFormSchemaFilter>({
    resolver: zodResolver(accountSchema),
  })

  const fields = () => {
    const fieldsArray = [{ fieldName: 'accountNames', title: 'Name' }]
    return fieldsArray
  }

  const postFormData = handleSubmit((data: AccountFormSchemaFilter) => {
    const dataFormat: Partial<AccountFilters> = Object.keys(data).reduce(
      (acc, key) => {
        const value = data[key as keyof AccountFormSchemaFilter]
        const storedValue = storedFilters[key as keyof AccountFilters]
        const updatedValues = [
          ...(Array.isArray(storedValue)
            ? storedValue
            : storedValue
            ? [storedValue]
            : []),
          ...(Array.isArray(value) ? value : value ? [value] : []),
        ].filter((val, index, arr) => val && arr.indexOf(val) === index)

        if (updatedValues.length > 0) {
          acc[key as keyof AccountFilters] = updatedValues as unknown as
            | AccountFilters[keyof AccountFilters]
            | undefined
        }

        return acc
      },
      {} as Partial<AccountFilters>
    )
    setStoredFilters(dataFormat as AccountFilters)
    setFilters((prev) => ({
      ...prev,
      ...dataFormat,
    }))

    reset()
  })

  const handleDeleteFilter = (
    filter: keyof AccountFilters,
    specificValue?: string
  ) => {
    const updatedFieldValues =
      (storedFilters[filter] as unknown as string[]) || []

    if (specificValue) {
      const newValues = updatedFieldValues.filter(
        (val: string) => val !== specificValue
      )

      const activeFilters: AccountFilters = {
        ...storedFilters,
        [filter]: newValues.length > 0 ? newValues : undefined,
      }

      setFilters(activeFilters)
      setStoredFilters(activeFilters)
    } else {
      const activeFilters = { ...storedFilters }
      delete activeFilters[filter]

      setFilters(activeFilters as AccountFilters)
      setStoredFilters(activeFilters as AccountFilters)
    }
  }

  const getActiveFilters = () => {
    return Object.entries(storedFilters).filter(([key, value]) => {
      if (Array.isArray(value)) {
        return value.length > 0
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
    const updatedFilters: Partial<AccountFilters> = {}
    setFilters(updatedFilters as AccountFilters)
    setStoredFilters(updatedFilters as AccountFilters)
    reset()
  }

  const handleFieldFocus = () => {
    setHasInteracted(true)
  }

  const selectAccountNameField = fields().filter((field) =>
    ['accountNames'].includes(field.fieldName as string)
  )

  const renderForm = () => {
    return (
      <form onSubmit={postFormData}>
        <Box sx={searchBox}>
          {selectAccountNameField.map((field) => (
            <ControlledFormSelect
              key={`${field.fieldName}-${filters.accountName}`}
              control={control}
              errors={errors}
              name={field.fieldName as keyof AccountFormSchemaFilter}
              label={field.title}
              options={getOptions(accounts)}
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
          return value.map((val: string) => (
            <Chip
              key={`${key}-${val}`}
              label={`${field?.title}: ${val}`}
              onDelete={() =>
                handleDeleteFilter(key as keyof AccountFilters, val)
              }
              size="small"
              sx={{ maxWidth: 'auto' }}
            />
          ))
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

export default AccountOverviewsFilterData
