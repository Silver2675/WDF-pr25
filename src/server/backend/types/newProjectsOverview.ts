import { z } from "zod";

export const NewProjectOverview = z.object({
    id: z.number(),
    accountName: z.string(),
    name: z.string(),
    reporterName: z.string(),
    reporterSurname: z.string(),
    dateOfReport: z.string().nullable(),
    dateOfNextReport: z.string().nullable(),
    planTimeStatus: z.number().nullable(),
    resourcesStatus: z.number().nullable(),
    scopeStatus: z.number().nullable(),
    costStatus: z.number().nullable(),
    riskStatus: z.number().nullable(),
    clientSatisfactionLevelStatus: z.number().nullable()
})

export const NewProjectOverviews = NewProjectOverview.array()

export type NewProjectOverviews = z.infer<typeof NewProjectOverviews>