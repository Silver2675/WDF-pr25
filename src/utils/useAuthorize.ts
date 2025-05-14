'use client'

import { UserContext } from '@/context/UserContext'
import { useContext, useMemo } from 'react'
import { UserRole } from '@/types/userRoles'
export const useAuthorize = (group: UserRole) => {
  const userData = useContext(UserContext)

  const isAuthorized = useMemo(() => {
    if (userData?.groups?.includes('Manager')) {
      return true
    }
    return userData?.groups?.includes(group) || false
  }, [userData?.groups, group])

  return { authorized: isAuthorized, loading: userData?.loading }
}
