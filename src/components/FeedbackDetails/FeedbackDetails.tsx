'use client'
import React, { useContext, useEffect, useState } from 'react'
import DetailsTable from './DetailsTable'
import AnswersDisplay from './AnswersDisplay'
import FeedbackTeamMembersList from './FeedbackTeamMembersList'
import { Feedback } from './types'
import { fetchFeedback } from './api'
import { UserContext } from '@/context/UserContext'
import { useCheckUnauthorized } from '@/utils/useCheckUnauthorized'

interface Params {
  feedbackId: number
}

const FeedbackDetails = ({ feedbackId }: Params) => {
  const [feedback, setFeedback] = useState<Feedback | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadFeedback = async () => {
      const data = await fetchFeedback(feedbackId)
      if (data) setFeedback(data)
      setIsLoading(false)
    }
    loadFeedback()
  }, [feedbackId])

  const { groups } = useContext(UserContext)
  const authorization = useCheckUnauthorized()

  if (authorization.loading) {
    return null
  }

  const isFeedbackViewer = groups?.includes('FeedbackViewer')

  const hideAddInterviewee = feedback
    ? feedback.questionAnswers.length === 1 &&
      feedback.questionAnswers[0].question.trim().toLowerCase() === 'note' &&
      isFeedbackViewer
    : true

  return (
    <>
      <DetailsTable feedback={feedback} isLoading={isLoading} />
      <FeedbackTeamMembersList
        feedbackId={feedbackId}
        hideAddInterviewee={hideAddInterviewee}
      />
      <AnswersDisplay
        feedback={feedback}
        feedbackId={feedbackId}
        isLoading={isLoading}
      />
    </>
  )
}

export default FeedbackDetails
