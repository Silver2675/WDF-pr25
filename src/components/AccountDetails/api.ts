import { apiUrls } from '@/constants/apiUrls'
import { request } from '@/server/backend/types/request'
import { AccountsBasicInformation } from './types'

export const fetchAccountsBasicInformation = async (accountId: number) => {
  try {
    const { ok, response } = await request<AccountsBasicInformation>({
      url: apiUrls.accountOverview(accountId),
      method: 'GET',
    })

    if (ok && response) {
      return response
    }
    throw new Error('Failed to fetch feedback')
  } catch (error) {
    console.error('Error fetching feedback:', error)
    return null
  }
}
