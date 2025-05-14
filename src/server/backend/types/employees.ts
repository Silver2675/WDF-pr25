import { z } from 'zod'

export const Employee = z.object({
  employee: z.string().nullable(),
  employeeMail: z.string().nullable(),
  projects: z.array(
    z.object({
      id: z.number().nullable(),
      name: z.string().nullable(),
      accountId: z.number().nullable(),
      accountName: z.string().nullable(),
    })
  ),
  feedbackDate: z.string().nullable(),
  overallRating: z.number().nullable(),
  reviewersCount: z.number().nullable(),
})

export const Employees = Employee.array()

export type Employees = z.infer<typeof Employees>
