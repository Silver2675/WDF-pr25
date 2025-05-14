import { z } from 'zod'

export const Phase = z.object({
  id: z.number(),
  name: z.string(),
})

export const Phases = Phase.array()

export type Phases = z.infer<typeof Phases>
