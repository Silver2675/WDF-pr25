import { z } from 'zod';

export const NewProject = z.object({
  id: z.number(),
  name: z.string(),
  account: z.object({
    id: z.number().nullable(),
    name: z.string().nullable()
  }).nullable(),
  reporter: z.object({
    id: z.number().nullable(),
    givenName: z.string().nullable(),
    surname: z.string().nullable()
  }).nullable(),
  isActive: z.boolean().nullable(),
  dateOfFirstReport: z.string().nullable(),
  reportingFrequency: z.number().nullable(),
  terminationDate: z.string().nullable(),
  filesLink: z.string().nullable(),
  businessContext: z.string().nullable(),
  technologies: z.array(z.string()).nullable(),
  lastFeedbackDate: z.string().nullable()
});

export const NewProjects = NewProject.array();

export type NewProjects = z.infer<typeof NewProjects>;
