import { z } from 'zod'

export const Reporter = z.object({
  id: z.number(),
  name: z.string(),
  surname: z.string(),
})

export const Reporters = Reporter.array()

export type Reporters = z.infer<typeof Reporters>
