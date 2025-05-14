import { z } from 'zod'

const filledRowSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  surname: z.string().trim().min(1, 'Surname is required'),
  position: z.string().optional(),
})

const emptyRowSchema = z.object({
  name: z.literal(''),
  surname: z.literal(''),
  position: z.literal(''),
})

const rowSchema = z.union([filledRowSchema, emptyRowSchema])

export const schema = z.object({
  teamMembers: z.array(rowSchema),
})

export type FormSchema = z.infer<typeof schema>
