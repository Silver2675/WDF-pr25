import { z } from 'zod'
import { SelectType } from '@/types/selectType'

export const schema = z
  .object({
    employeeId: SelectType,
    reportingFrequency: SelectType,
    technologies: z.array(z.string()),
    businessContext: z.string(),
    teamLeaders: z.array(z.number()),
    teamMembers: z.array(z.number()),
  })
  .required()

export type FormSchemaSelect = z.infer<typeof schema>
