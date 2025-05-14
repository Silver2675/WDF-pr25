import { z } from 'zod'

export const Project = z.object({
  id: z.number().nullable(),
  title: z.string().nullable(),
})

export const Projects = Project.array()

export type Projects = z.infer<typeof Projects>
