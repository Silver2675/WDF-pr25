import { z } from 'zod'

const QuestionAnswerSchema = z.object({
  question: z.string().nullable(),
  answers: z.string().array().nullable(),
  grades: z.number().array().nullable(),
})

export const FeedbackDetail = z.object({
  name: z.string().nullable(),
  surname: z.string().nullable(),
  gradedEmployeeEmail: z.string().nullable(),
  feedbackDate: z.string().nullable(),
  projectName: z.string().nullable(),
  coordinator: z.string().nullable(),
  client: z.string().nullable(),
  questionAnswers: z.array(QuestionAnswerSchema),
})
