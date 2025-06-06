import { SelectType } from '@/types/selectType'
import { z } from 'zod'

export const schema = z.object({
  accountId: SelectType,
  description: z.string().optional(),
  website: z.string().optional(),
  deliveryManagerId: SelectType,
})

export type FormSchema = z.infer<typeof schema>
