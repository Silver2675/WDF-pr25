import { z } from 'zod'

export const AppInformation = z.object({
  name: z.string().nullable(),
  version: z.string().nullable(),
})

