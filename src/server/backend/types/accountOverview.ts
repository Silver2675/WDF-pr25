import { z } from 'zod'

export const AccountOverview = z.object({
  id: z.number(),
  name: z.string().nullable(),
  description: z.string().nullable(),
  website: z.string().nullable(),
  deliveryManager: z
    .object({
      id: z.number(),
      givenName: z.string().nullable(),
      surname: z.string().nullable(),
      mail: z.string().nullable(),
      isJiter: z.boolean(),
    })
    .nullable(),
})

export type AccountOverview = z.infer<typeof AccountOverview>
