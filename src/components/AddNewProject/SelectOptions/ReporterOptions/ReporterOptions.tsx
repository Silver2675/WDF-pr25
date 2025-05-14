'use client'
import { useEffect, useState, useCallback } from 'react'
import { request } from '@/server/backend/types/request'
import { Reporter, ReporterProps } from './types'
import { FieldValues } from 'react-hook-form'
import ControlledSelect from '@/components/ControlledSelect'
import { getOptions } from './utils'
import { apiUrls } from '@/constants/apiUrls'
import { formInputLabel } from '@/styles/formStyles'
import { detailsInputLabel } from '@/styles/styles'

const ReporterOptions = <T extends FieldValues>({
  control,
  errors,
  name,
  readOnlyElement,
}: ReporterProps<T>) => {
  const [reporters, setReporters] = useState<Reporter[]>([])
  const [loading, setLoading] = useState(false)

  const fetchReporterData = useCallback(async () => {
    setLoading(true)
    const { ok, response } = await request<Reporter[]>({
      url: apiUrls.employeesName,
      method: 'GET',
    })
    if (ok && response) {
      const filteredReporters = response.filter(
        (reporter) => reporter.givenName !== null || reporter.surname !== null
      )
      setReporters(filteredReporters)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchReporterData()
  }, [fetchReporterData])

  return (
    <ControlledSelect
      control={control}
      options={getOptions(reporters)}
      name={name}
      label={'Reporter'}
      errors={errors}
      loading={loading}
      required
      detailsStyles={
        readOnlyElement === 'EDITING_INFORMATION'
          ? detailsInputLabel
          : formInputLabel
      }
    />
  )
}
export default ReporterOptions
