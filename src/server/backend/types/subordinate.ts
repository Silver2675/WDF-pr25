import { z } from 'zod'

export const Subordinate = z.object({
  id: z.number().nullable(),
  givenName: z.string().nullable(),
  surname: z.string().nullable(),
  mail: z.string().nullable(),
  isJiter: z.boolean().nullable(),
})

export const Subordinates = Subordinate.array()

export type Subordinates = z.infer<typeof Subordinates>
