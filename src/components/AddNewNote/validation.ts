import { z } from 'zod'
import { SelectType } from '@/types/selectType'

export const schema = z
  .object({
    gradedEmployeeEmail: SelectType,
    client: SelectType,
    project: SelectType,
    grade: SelectType,
    answer: z.string(),
    noteWriter: z.string(),
  })
  .required()

export type FormSchema = z.infer<typeof schema>
