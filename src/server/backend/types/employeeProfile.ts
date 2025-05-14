import { z } from 'zod'

export const EmployeeProfile = z.object({
  firstName: z.string().nullable(),
  surname: z.string().nullable(),
  client: z.string().nullable(),
  project: z.string().nullable(),
  latestNote: z.object({
    id: z.number().nullable(),
    author: z.string().nullable(),
    content: z.string().nullable(),
    grade: z.number().nullable(),
    date: z.string().nullable(),
  }),
  listOfFeedbackProcesses: z.array(
    z.object({
      client: z.string().nullable(),
      project: z.string().nullable(),
      reviewDate: z.string().nullable(),
      reviewRating: z.number().nullable(),
      reviewType: z.string().nullable(),
      reviews: z.array(
        z.object({
          feedbackTypeOfReviews: z.string().nullable(),
          rating: z.number().nullable(),
          id: z.number().nullable(),
        })
      ),
    })
  ),
})
export type EmployeeProfile = z.infer<typeof EmployeeProfile>
