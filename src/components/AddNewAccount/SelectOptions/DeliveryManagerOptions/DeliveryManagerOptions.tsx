'use client'
import { useEffect, useState, useCallback } from 'react'
import { request } from '@/server/backend/types/request'
import { DeliveryManager, DeliveryManagerProps } from './types'
import { FieldValues } from 'react-hook-form'
import ControlledSelect from '@/components/ControlledSelect'
import { getOptions } from './utils'
import { apiUrls } from '@/constants/apiUrls'
import { formInputLabel } from '@/styles/formStyles'
import { detailsInputLabel } from '@/styles/styles'

const DeliveryManagerOptions = <T extends FieldValues>({
  control,
  errors,
  name,
  readOnlyElement,
}: DeliveryManagerProps<T>) => {
  const [deliveryManagers, setDeliveryManagers] = useState<DeliveryManager[]>(
    []
  )
  const [loading, setLoading] = useState(false)

  const fetchDeliveryManagerData = useCallback(async () => {
    setLoading(true)
    const { ok, response } = await request<DeliveryManager[]>({
      url: apiUrls.employeesName,
      method: 'GET',
    })
    if (ok && response) {
      const filteredDeliveryManagers = response.filter(
        (manager) => manager.givenName !== null || manager.surname !== null
      )
      setDeliveryManagers(filteredDeliveryManagers)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchDeliveryManagerData()
  }, [fetchDeliveryManagerData])

  return (
    <ControlledSelect
      control={control}
      options={getOptions(deliveryManagers)}
      name={name}
      label={'Delivery Manager'}
      errors={errors}
      loading={loading}
      detailsStyles={
        readOnlyElement === 'EDITING_INFORMATION'
          ? detailsInputLabel
          : formInputLabel
      }
    />
  )
}
export default DeliveryManagerOptions
