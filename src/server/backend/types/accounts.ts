import { z } from 'zod'

export const Account = z.object({
  id: z.number(),
  name: z.string().nullable(),
  deliveryManagerGivenName: z.string().nullable(),
  deliveryManagerSurname: z.string().nullable(),
})

export const Accounts = Account.array()

export type Accounts = z.infer<typeof Accounts>
