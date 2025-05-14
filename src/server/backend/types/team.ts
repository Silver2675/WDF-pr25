import { z } from 'zod'

export const Team = z.object({
  teamLeaders: z
    .array(
      z.object({
        id: z.number(),
        givenName: z.string().nullable(),
        surname: z.string().nullable(),
        isJiter: z.boolean().nullable(),
      })
    )
    .nullable(),
  teamMembers: z
    .array(
      z.object({
        id: z.number(),
        givenName: z.string().nullable(),
        surname: z.string().nullable(),
        isJiter: z.boolean().nullable(),
      })
    )
    .nullable(),
})
