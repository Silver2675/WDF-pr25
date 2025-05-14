import { Feedback, FeedbackTeamMember, TeamMember } from './types'
import { apiUrls } from '@/constants/apiUrls'
import { request } from '@/server/backend/types/request'

export const fetchFeedback = async (feedbackId: number) => {
  try {
    const { ok, response } = await request<Feedback>({
      url: apiUrls.feedback(feedbackId),
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

export const fetchTeamMembers = async (
  projectName: string,
  clientName: string
) => {
  try {
    const { ok, response } = await request<TeamMember[]>({
      url: apiUrls.employeesWeJitProjects,
      method: 'GET',
      query: {
        client: clientName,
        project: projectName,
      },
    })

    if (ok && response) {
      return response
    }
    throw new Error('Failed to fetch team members')
  } catch (error) {
    console.error('Error fetching team members:', error)
    return []
  }
}

export const fetchFeedbackTeamMembers = async (feedbackId: number) => {
  try {
    const { ok, response } = await request<FeedbackTeamMember[]>({
      url: apiUrls.feedbackTeamMembers(feedbackId),
      method: 'GET',
    })

    if (ok && response) {
      return response
    }
    throw new Error('Failed to fetch feedback team members')
  } catch (error) {
    console.error('Error fetching feedback team members:', error)
    return []
  }
}
