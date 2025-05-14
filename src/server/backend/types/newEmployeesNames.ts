import { z } from 'zod'

export const NewEmployeesName = z.object({
  id: z.number(),
  givenName: z.string().nullable(),
  surname: z.string().nullable(),
  isSubordinate: z.boolean().optional(),
  isJiter: z.boolean().optional(),
})

export const NewEmployeesNames = NewEmployeesName.array()

export type NewEmployeesNames = z.infer<typeof NewEmployeesNames>
