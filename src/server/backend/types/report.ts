import { z } from 'zod'

export const Report = z.object({
  id: z.number(),
  dateOfReport: z.string(),
  dateOfNextReport: z.string(),
  projectId: z.number(),
  projectPhaseId: z.number().nullable().optional(),
  finishedActivities: z.string().nullable().optional(),
  inProgressActivities: z.string().nullable().optional(),
  plannedActivities: z.string().nullable().optional(),
  planTimeStatusId: z.number().nullable().optional(),
  resourcesStatusId: z.number().nullable().optional(),
  scopeStatusId: z.number().nullable().optional(),
  costStatusId: z.number().nullable().optional(),
  riskStatusId: z.number().nullable().optional(),
  planTimeDetails: z.string().nullable().optional(),
  resourcesDetails: z.string().nullable().optional(),
  scopeDetails: z.string().nullable().optional(),
  costDetails: z.string().nullable().optional(),
  riskDetails: z.string().nullable().optional(),
  risks: z.string().nullable().optional(),
  comment: z.string().nullable().optional(),
  teamSize: z.number().nullable().optional(),
})

export const ReportDates = z.object({
  id: z.number(),
  dateOfReport: z.string(),
})

export const ReportsDates = ReportDates.array()

export type ReportsDates = z.infer<typeof ReportsDates>
