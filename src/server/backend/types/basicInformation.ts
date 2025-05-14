import { z } from 'zod'

export const BasicInformation = z.object({
  customerName: z.string(),
  projectName: z.string(),
  reporterName: z.string(),
  reporterSurname: z.string(),
  reportingFrequency: z.number().optional(),
  isActive: z.boolean(),
  dateOfNextReport: z.string().nullable(),
  employeeId: z.number(),
  terminationDate: z.string().nullable(),
  lastReviewDate: z.string().nullable(),
  nextReviewDate: z.string().nullable(),
  lastFeedbackDate: z.string().nullable(),
  nextFeedbackDate: z.string().nullable(),
})
