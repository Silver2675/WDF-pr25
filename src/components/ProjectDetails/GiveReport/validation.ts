import { z } from 'zod';
import { ReportFormType } from '@/types/reportFormTypes';
import dayjs, { Dayjs } from 'dayjs';

export const schema = z.object({
  dateOfReport: z.instanceof(dayjs as unknown as typeof Dayjs),
  projectPhase: ReportFormType.nullable().optional(),
  finishedActivities: z.string().nullable().optional(),
  inProgressActivities: z.string().nullable().optional(),
  plannedActivities: z.string().nullable().optional(),
  planTimeStatus: ReportFormType.nullable().optional(),
  resourcesStatus: ReportFormType.nullable().optional(),
  scopeStatus: ReportFormType.nullable().optional(),
  costStatus: ReportFormType.nullable().optional(),
  riskStatus: ReportFormType.nullable().optional(),
  clientSatisfactionLevelStatus: ReportFormType.nullable().optional(),
  planTimeDetails: z.string().nullable().optional(),
  resourcesDetails: z.string().nullable().optional(),
  scopeDetails: z.string().nullable().optional(),
  costDetails: z.string().nullable().optional(),
  riskDetails: z.string().nullable().optional(),
  clientSatisfactionLevelDetails: z.string().nullable().optional(),
  risks: z.string().nullable().optional(),
  comment: z.string().nullable().optional(),
  teamSize: z.string().or(z.number()).nullable().optional(),
  positiveAspects: z.string().nullable().optional(),
  currentProblems: z.string().nullable().optional(),
  news: z.string().nullable().optional(),
  helpNeeded: z.string().nullable().optional(),
  openBugs: z.string().nullable().optional(),
});

export type FormSchemaReport = z.infer<typeof schema>;
