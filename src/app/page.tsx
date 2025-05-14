'use client'

import { routes } from '@/constants/routes'
import { UserContext } from '@/context/UserContext'
import { useCheckUnauthorized } from '@/utils/useCheckUnauthorized'
import { redirect } from 'next/navigation'
import { useContext } from 'react'

export default function Home() {
  const userData = useCheckUnauthorized()
  const { groups } = useContext(UserContext)

  if (!userData.loading) {
    if (
      (userData.authorized && groups?.includes('Manager')) ||
      groups?.includes('Reporters')
    ) {
      redirect(routes.projects)
    } else if (userData.authorized && groups?.includes('FeedbackViewer')) {
      redirect(routes.feedbacks)
    } else {
      redirect(routes.unauthorized)
    }
  } else {
    return null
  }
}
