import { z } from 'zod'

export const ReportFormType = z.object({
  label: z.string().or(z.number()),
  value: z.number().nullable(),
})
