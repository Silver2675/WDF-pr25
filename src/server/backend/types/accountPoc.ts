import { z } from 'zod'

export const ProjectNames = z.object({
  id: z.number().nullable(),
  name: z.string().nullable(),
})

export const AccountPoc = z.object({
  id: z.number(),
  givenName: z.string().nullable(),
  surname: z.string().nullable(),
  mail: z.string().nullable(),
  isJiter: z.boolean(),
  jobTitle: z.string().nullable(),
  projectNames: z.array(ProjectNames),
})

export const AccountPocs = AccountPoc.array()

export type AccountPocs = z.infer<typeof AccountPocs>
