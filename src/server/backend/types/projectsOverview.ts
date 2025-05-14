import { z } from 'zod'

export const Overview = z.object({
  id: z.number(),
  customerName: z.string(),
  projectName: z.string(),
  reporterName: z.string(),
  reporterSurname: z.string(),
  dateOfReport: z.string().nullable(),
  dateOfNextReport: z.string().nullable(),
  terminationDate: z.string().nullable(),
  isActive: z.boolean(),
  planTimeStatusId: z.number().nullable(),
  resourcesStatusId: z.number().nullable(),
  scopeStatusId: z.number().nullable(),
  costStatusId: z.number().nullable(),
  riskStatusId: z.number().nullable(),
  lastReviewDate: z.string().nullable(),
  nextReviewDate: z.string().nullable(),
})

export const Overviews = Overview.array()

export type Overviews = z.infer<typeof Overviews>
