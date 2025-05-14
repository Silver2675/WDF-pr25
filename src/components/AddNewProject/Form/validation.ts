import { z } from 'zod'
import { SelectType } from '@/types/selectType'
import dayjs, { Dayjs } from 'dayjs'

export const schema = z.object({
  accountId: SelectType,
  name: SelectType,
  reporterId: SelectType,
  businessContext: z.string().optional(),
  dateOfFirstReport: z.instanceof(dayjs as unknown as typeof Dayjs),
  reportingFrequency: SelectType,
  technologies: z.array(z.string()).optional(),
  teamLeaderIds: z.array(z.number()).optional(),
  employeeIds: z.array(z.number()).optional(),
})

export type FormSchema = z.infer<typeof schema>
