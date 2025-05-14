import { z } from 'zod'

export const Status = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
})

export const Statuses = Status.array()

export type Statuses = z.infer<typeof Statuses>
