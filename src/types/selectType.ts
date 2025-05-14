import { z } from 'zod'

export const SelectType = z.object({
  label: z.string(),
  value: z.string().or(z.number()),
})
