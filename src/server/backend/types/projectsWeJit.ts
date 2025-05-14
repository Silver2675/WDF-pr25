import { z } from 'zod'

export const ProjectWeJit = z.object({
  id: z.number(),
  name: z.string(),
})

export const ProjectsWeJit = ProjectWeJit.array()

export type ProjectsWeJit = z.infer<typeof ProjectsWeJit>
