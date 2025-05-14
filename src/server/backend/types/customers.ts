import { z } from 'zod'

export const Customer = z.object({
  id: z.number(),
  name: z.string(),
})

export const Customers = Customer.array()

export type Customers = z.infer<typeof Customers>
