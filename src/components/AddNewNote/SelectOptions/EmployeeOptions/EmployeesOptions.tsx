'use client'

import { useEffect, useState, useCallback } from 'react'
import { request } from '@/server/backend/types/request'
import ControlledSelect from '@/components/ControlledSelect'
import { apiUrls } from '@/constants/apiUrls'
import { formInputLabel } from '@/styles/formStyles'
import { Employee, EmployeeProps } from './types'
import { getEmployeeOptions } from './utils'

const EmployeeOptions = ({ control, errors }: EmployeeProps) => {
  const [employees, setEmployees] = useState<Employee[]>([])
  const [loading, setLoading] = useState(false)

  const fetchEmployeeData = useCallback(async () => {
    setLoading(true)
    const { ok, response } = await request<Employee[]>({
      url: apiUrls.employeesSubordinates,
      method: 'GET',
    })
    if (ok && response) {
      setEmployees(response)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchEmployeeData()
  }, [fetchEmployeeData])

  return (
    <ControlledSelect
      control={control}
      options={getEmployeeOptions(employees)}
      name={'gradedEmployeeEmail'}
      label={'Employee'}
      errors={errors}
      loading={loading}
      detailsStyles={formInputLabel}
      required
    />
  )
}
export default EmployeeOptions
