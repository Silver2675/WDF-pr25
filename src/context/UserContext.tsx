'use client'
import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useCallback,
} from 'react'
import { request } from '@/server/backend/types/request'
import { User } from '@/server/backend/types/user'
import { apiUrls } from '@/constants/apiUrls'

const initialContextState: { loading: boolean; groups: User['groups'] } = {
  groups: null,
  loading: true,
}
const UserContext = createContext<{
  groups: User['groups'] | null
  loading: boolean
}>(initialContextState)

const UserContextProvider = UserContext.Provider

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [groups, setGroups] = useState<User['groups'] | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchUserData = useCallback(async () => {
    const { ok, response } = await request<User>({
      url: apiUrls.user,
      method: 'GET',
    })
    if (ok && response) {
      setGroups(response.groups)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchUserData()
  }, [fetchUserData])

  return (
    <UserContextProvider value={{ groups, loading }}>
      {children}
    </UserContextProvider>
  )
}

UserProvider.displayName = 'UserProvider'

export { UserProvider, UserContext }
