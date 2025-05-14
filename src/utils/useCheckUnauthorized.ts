'use client'

import { UserContext } from '@/context/UserContext'
import { useContext, useMemo } from 'react'

export const useCheckUnauthorized = () => {
  const userData = useContext(UserContext)

  const isUserAuthorized = useMemo(() => {
    if (userData?.groups) {
      return (
        userData.groups.includes('Manager') ||
        userData.groups.includes('Reporters') ||
        userData.groups.includes('FeedbackViewer')
      )
    }
  }, [userData?.groups])

  return { authorized: isUserAuthorized, loading: userData?.loading }
}
