import React, { useCallback, useEffect, useState } from 'react'
import { Account, AccountProps } from './types'
import { request } from '@/server/backend/types/request'
import { apiUrls } from '@/constants/apiUrls'
import ControlledSelect from '@/components/ControlledSelect'
import { formInputLabel } from '@/styles/formStyles'
import { getOptions } from './utils'

const AccountOptions = ({ control, errors, name }: AccountProps) => {
  const [accounts, setAccounts] = useState<Account[]>([])
  const [loading, setLoading] = useState(false)

  const fetchAccountData = useCallback(async () => {
    setLoading(true)
    const { ok, response } = await request<Account[]>({
      url: apiUrls.accountsWeJit,
      method: 'GET',
      query: {
        missing: String(true),
      },
    })
    if (ok && response) {
      setAccounts(response)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchAccountData()
  }, [fetchAccountData])

  return (
    <ControlledSelect
      control={control}
      options={getOptions(accounts)}
      name={name}
      label={'Account'}
      errors={errors}
      loading={loading}
      detailsStyles={formInputLabel}
      required
      freeSolo
    />
  )
}

export default AccountOptions
