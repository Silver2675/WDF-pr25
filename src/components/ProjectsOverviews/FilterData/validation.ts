import { z } from 'zod'
import dayjs, { Dayjs } from 'dayjs'

export const schema = z.object({
  accountNames: z
    .union([z.string(), z.array(z.string())])
    .transform((value) => (Array.isArray(value) ? value : [value]))
    .optional(),
  isActive: z.boolean(),
  projectNames: z
    .union([z.string(), z.array(z.string())])
    .transform((value) => (Array.isArray(value) ? value : [value]))
    .optional(),
  reporters: z
    .union([z.string(), z.array(z.string())])
    .transform((value) => (Array.isArray(value) ? value : [value]))
    .optional(),
  reportDateStart: z
    .instanceof(dayjs as unknown as typeof Dayjs)
    .transform((date) => date?.format('YYYY-MM-DD'))
    .optional(),
  reportDateEnd: z
    .instanceof(dayjs as unknown as typeof Dayjs)
    .transform((date) => date?.format('YYYY-MM-DD'))
    .optional(),
  orderBy: z.string().optional(),
})

export type FormSchemaFilter = z.infer<typeof schema>
