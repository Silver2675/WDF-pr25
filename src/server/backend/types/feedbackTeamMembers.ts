import { z } from 'zod'

export const FeedbackTeamMember = z.object({
  id: z.number(),
  name: z.string().nullable(),
  surname: z.string().nullable(),
  position: z.string().nullable(),
  feedbackId: z.number().nullable(),
})

export const FeedbackTeamMembers = FeedbackTeamMember.array()

export type FeedbackTeamMembers = z.infer<typeof FeedbackTeamMembers>
