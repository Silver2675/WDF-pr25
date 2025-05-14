import { z } from 'zod'

export const TeamMember = z.object({
  id: z.number(),
  name: z.string().nullable(),
  surname: z.string().nullable(),
})

export const TeamMembers = TeamMember.array()

export type TeamMembers = z.infer<typeof TeamMembers>
