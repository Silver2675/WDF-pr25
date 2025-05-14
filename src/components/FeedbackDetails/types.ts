export interface Feedback {
  feedbackId: number
  name: string
  surname: string
  gradedEmployeeEmail: string
  feedbackDate: string
  projectName: string
  coordinator: string
  client: string
  questionAnswers: QuestionAnswers[]
}

export interface TeamMember {
  id: number
  name: string
  surname: string
}

export interface FeedbackTeamMember {
  id: number
  name: string
  surname: string
  position: string
  feedbackId: number
}

export interface EmployeeDetails {
  feedbackId: number
  name: string
  surname: string
  feedbackDate: string
  projectName: string
  coordinator: string
  client: string
  questionAnswers: QuestionAnswers[]
}

export interface QuestionAnswers {
  question: string
  answers: string[]
  grades: number[]
}

export interface EmployeeDetailsProps {
  feedback: Feedback | null
  isLoading: boolean
}
