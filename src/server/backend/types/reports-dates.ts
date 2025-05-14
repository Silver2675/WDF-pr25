import { z } from 'zod';

export const ReportDate = z.object({
  id: z.number(),
  dateOfReport: z.string().nullable()
});

export const ReportDates = ReportDate.array();

export type ReportDates = z.infer<typeof ReportDates>