import { z } from 'zod'
import dayjs, { Dayjs } from 'dayjs'

export const schema = z.object({
  employees: z
    .union([z.string(), z.array(z.string())])
    .transform((value) => (Array.isArray(value) ? value : [value]))
    .optional(),
  employeeMail: z.string().optional(),
  projectNames: z
    .union([z.string(), z.array(z.string())])
    .transform((value) => (Array.isArray(value) ? value : [value]))
    .optional(),
  clientNames: z
    .union([z.string(), z.array(z.string())])
    .transform((value) => (Array.isArray(value) ? value : [value]))
    .optional(),
  feedbackStartDate: z
    .instanceof(dayjs as unknown as typeof Dayjs)
    .transform((date) => date?.format('YYYY-MM-DD'))
    .optional(),
  feedbackEndDate: z
    .instanceof(dayjs as unknown as typeof Dayjs)
    .transform((date) => date?.format('YYYY-MM-DD'))
    .optional(),
  orderBy: z.string().optional(),
})

export type EmployeeFormSchemaFilter = z.infer<typeof schema>
