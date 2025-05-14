import { z } from 'zod'

export const EmployeeProject = z.object({
  id: z.number(),
  title: z.string(),
  customerName: z.string(),
  customerId: z.number(),
})

export type EmployeeProject = z.infer<typeof EmployeeProject>
