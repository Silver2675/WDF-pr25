import { z } from 'zod'

export const MyProject = z.object({
  id: z.number(),
  customerName: z.string().nullable(),
  projectName: z.string().nullable(),
  dateOfReport: z.string().nullable(),
  dateOfNextReport: z.string().nullable(),
  terminationDate: z.string().nullable(),
  planTimeStatusId: z.number().nullable(),
  resourcesStatusId: z.number().nullable(),
  scopeStatusId: z.number().nullable(),
  costStatusId: z.number().nullable(),
  riskStatusId: z.number().nullable(),
  isActive: z.boolean(),
})

export const MyProjectsBackendType = MyProject.array()

export type MyProjectsBackendType = z.infer<typeof MyProjectsBackendType>
