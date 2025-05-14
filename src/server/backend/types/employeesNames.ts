import { z } from 'zod'

export const EmployeesName = z.object({
  id: z.number(),
  givenName: z.string().nullable(),
  surname: z.string().nullable(),
  isJiter: z.boolean().optional(),
})

export const EmployeesNames = EmployeesName.array()

export type EmployeesNames = z.infer<typeof EmployeesNames>
