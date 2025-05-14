import { Feedback } from '../types'

export interface AnswersDisplayProps {
  feedback: Feedback | null
  feedbackId: number
  isLoading: boolean
}
