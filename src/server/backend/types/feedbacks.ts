import { z } from 'zod'

export const Feedback = z.object({
  feedbackId: z.number(),
  employee: z.string().nullable(),
  projectName: z.string().nullable(),
  coordinator: z.string().nullable(),
  clientName: z.string().nullable(),
  employeePosition: z.string().nullable(),
  feedbackDate: z.string().nullable(),
  overallRating: z.number().nullable(),
  feedbackType: z.string().or(z.number()).nullable(),
  reviewType: z.string().or(z.number()).nullable(),
  reviewersCount: z.number().nullable(),
})

export const Feedbacks = Feedback.array()

export type Feedbacks = z.infer<typeof Feedbacks>
