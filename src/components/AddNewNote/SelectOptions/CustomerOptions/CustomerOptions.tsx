'use client'

import { useEffect, useState, useCallback } from 'react'
import { request } from '@/server/backend/types/request'
import ControlledSelect from '@/components/ControlledSelect'
import { apiUrls } from '@/constants/apiUrls'
import { formInputLabel } from '@/styles/formStyles'
import { CustomersOptionsProps, Customer } from './types'
import { getCustomerOptions } from './utils'

const CustomerOptions = ({
  control,
  errors,
  employeeData,
  disabled,
  setSelectedCustomer,
}: CustomersOptionsProps) => {
  const [customers, setCustomers] = useState<Customer[]>([])
  const [loading, setLoading] = useState(false)

  const fetchCustomers = useCallback(async () => {
    setLoading(true)
    const { ok, response } = await request<Customer[]>({
      url: apiUrls.accountsWeJit,
      method: 'GET',
      query: {
        missing: String(false),
      },
    })
    if (ok && response) {
      setCustomers(response)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchCustomers()
  }, [fetchCustomers])

  useEffect(() => {
    if (employeeData?.customerName) {
      const defaultCustomer = customers.find(
        (customer) => customer.name === employeeData.customerName
      )
      if (defaultCustomer) {
        setSelectedCustomer(defaultCustomer)
      }
    }
  }, [employeeData, customers, setSelectedCustomer])

  return (
    <ControlledSelect
      control={control}
      options={getCustomerOptions(customers)}
      name={'client'}
      label={'Account'}
      errors={errors}
      loading={loading}
      detailsStyles={formInputLabel}
      required
      disabled={disabled}
      freeSolo
    />
  )
}

export default CustomerOptions
