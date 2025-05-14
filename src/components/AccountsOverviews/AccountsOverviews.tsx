'use client'

import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { Account, AccountFilters, AccountOverview } from './types'
import { request } from '@/server/backend/types/request'
import { apiUrls } from '@/constants/apiUrls'
import AccountsTable from '../AccountsTable/AccountsTable'
import useLocalStorageFilters from '../Hooks/UseLocalStorageFilters'

const ACCOUNTS_LOCAL_STORAGE_KEY = 'accountsFilters'

const AccountsOverviews = () => {
  const [accounts, setAccounts] = useState<Account[]>([])
  const [overviews, setOverviews] = useState<AccountOverview[]>([])
  const [loading, setLoading] = useState(false)

  const initialFilters = (storageKey: string) => {
    const savedFilters = localStorage.getItem(storageKey)
    return savedFilters ? JSON.parse(savedFilters) : {}
  }

  const [accountsFilters, setAccountsFilters] =
    useLocalStorageFilters<AccountFilters>({
      key: ACCOUNTS_LOCAL_STORAGE_KEY,
      initialValue: initialFilters(ACCOUNTS_LOCAL_STORAGE_KEY),
    })

  const fetchAccountData = useCallback(async () => {
    setLoading(true)
    const { ok, response } = await request<AccountOverview[]>({
      url: apiUrls.accountsOverview,
      method: 'POST',
      body: accountsFilters,
    })

    if (ok && response) {
      setOverviews(response as AccountOverview[])
    }
    setLoading(false)
  }, [accountsFilters])

  const fetchAccountFilterData = useCallback(async () => {
    const { ok, response } = await request<Account[]>({
      url: apiUrls.accountsNames,
      method: 'GET',
    })
    if (ok && response) {
      setAccounts(response)
    }
  }, [])

  useEffect(() => {
    fetchAccountFilterData()
  }, [])

  useEffect(() => {
    fetchAccountData()
  }, [JSON.stringify(accountsFilters)])

  const handleSortChange = (orderBy: string) => {
    setAccountsFilters((prev) => ({
      ...prev,
      orderBy,
    }))

    const sortedOverview = [...overviews].sort((a, b) => {
      const [key, direction] = orderBy.split(' ')
      const aValue = a[key as keyof AccountOverview]
      const bValue = b[key as keyof AccountOverview]

      if (aValue === null || aValue === undefined)
        return direction === 'asc' ? 1 : -1
      if (bValue === null || bValue === undefined)
        return direction === 'asc' ? -1 : 1

      if (aValue < bValue) return direction === 'asc' ? -1 : 1
      if (aValue > bValue) return direction === 'asc' ? 1 : -1
      return 0
    })

    setOverviews(sortedOverview)
  }

  const handleActiveFilterChange = (isActive: string) => {
    const newFilters = {
      ...accountsFilters,
      isActive: isActive === 'active',
    }
    setAccountsFilters(newFilters)
  }

  return (
    <>
      <AccountsTable
        filters={accountsFilters}
        filterChange={handleActiveFilterChange}
        fetchData={fetchAccountData}
        overviews={overviews}
        title="Accounts"
        setFilters={
          setAccountsFilters as Dispatch<SetStateAction<AccountFilters>>
        }
        loading={loading}
        handleSortChange={handleSortChange}
        accounts={accounts}
      />
    </>
  )
}

export default AccountsOverviews
