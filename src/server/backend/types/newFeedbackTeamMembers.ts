import { z } from 'zod'

export const NewTeamMember = z.object({
  name: z.string().nullable(),
  surname: z.string().nullable(),
  position: z.string().nullable(),
})

export const NewTeamMembers = NewTeamMember.array()

export type NewTeamMembers = z.infer<typeof NewTeamMembers>
