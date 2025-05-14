'use client'
import { useEffect, useState, useCallback } from 'react'
import { request } from '@/server/backend/types/request'
import { Account, AccountProps } from './types'
import { getOptions } from './utils'
import ControlledSelect from '@/components/ControlledSelect'
import { apiUrls } from '@/constants/apiUrls'
import { formInputLabel } from '@/styles/formStyles'

interface AccountOptionsProps extends AccountProps {
  freesolo?: boolean
}

const AccountOptions = ({
  control,
  errors,
  freesolo = false,
}: AccountOptionsProps) => {
  const [accounts, setAccounts] = useState<Account[]>([])
  const [loading, setLoading] = useState(false)

  const fetchAccountData = useCallback(async () => {
    setLoading(true)
    const { ok, response } = await request<Account[]>({
      url: apiUrls.accountsNames,
      method: 'GET',
    })
    if (ok && response) {
      setAccounts(response)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchAccountData()
  }, [fetchAccountData])

  return freesolo ? (
    <ControlledSelect
      control={control}
      options={getOptions(accounts)}
      name={'accountId'}
      label={'Account'}
      errors={errors}
      loading={loading}
      detailsStyles={formInputLabel}
      required
      freeSolo
    />
  ) : (
    <ControlledSelect
      control={control}
      options={getOptions(accounts)}
      name={'accountId'}
      label={'Account'}
      errors={errors}
      loading={loading}
      detailsStyles={formInputLabel}
      required
    />
  )
}

export default AccountOptions
