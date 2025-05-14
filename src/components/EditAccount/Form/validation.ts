import { SelectType } from '@/types/selectType'
import { z } from 'zod'

export const schema = z.object({
  accountId: SelectType,
  description: z.string().optional().nullable(),
  website: z.string().optional().nullable(),
  deliveryManagerId: SelectType,
})

export type FormSchema = z.infer<typeof schema>
