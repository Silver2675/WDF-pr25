import { z } from "zod";

export const ProjectsWeJitName = z.object({
    id: z.number(),
    title: z.string(),
    isAssigned: z.boolean()
})

export const ProjectsWeJitNames = ProjectsWeJitName.array()

export type ProjectsWeJitNames = z.infer<typeof ProjectsWeJitNames>