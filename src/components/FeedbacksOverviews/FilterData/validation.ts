import { z } from 'zod'
import dayjs, { Dayjs } from 'dayjs'

export const schema = z.object({
  employees: z
    .union([z.string(), z.array(z.string())])
    .transform((value) => (Array.isArray(value) ? value : [value]))
    .optional(),
  projectNames: z
    .union([z.string(), z.array(z.string())])
    .transform((value) => (Array.isArray(value) ? value : [value]))
    .optional(),
  coordinators: z
    .union([z.string(), z.array(z.string())])
    .transform((value) => (Array.isArray(value) ? value : [value]))
    .optional(),
  clientNames: z
    .union([z.string(), z.array(z.string())])
    .transform((value) => (Array.isArray(value) ? value : [value]))
    .optional(),
  customerNames: z.string().optional(),
  employeePosition: z.string().optional(),
  feedbackStartDate: z
    .instanceof(dayjs as unknown as typeof Dayjs)
    .transform((date) => date?.format('YYYY-MM-DD'))
    .optional(),
  feedbackEndDate: z
    .instanceof(dayjs as unknown as typeof Dayjs)
    .transform((date) => date?.format('YYYY-MM-DD'))
    .optional(),
  reporterSurnames: z
    .union([z.string(), z.array(z.string())])
    .transform((value) => (Array.isArray(value) ? value : [value]))
    .optional(),
  orderBy: z.string().optional(),
})

export type FeedbackFormSchemaFilter = z.infer<typeof schema>
