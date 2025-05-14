import { z } from 'zod'

export const User = z.object({
  groups: z.enum(['Manager', 'Reporters', 'FeedbackViewer']).array().nullable(),
})

export type User = z.infer<typeof User>
