import { z } from 'zod'

export const schema = z.object({
  givenName: z
    .string({
      required_error: 'Required',
    })
    .min(1, { message: 'Required' }),
  surname: z
    .string({
      required_error: 'Required',
    })
    .min(1, { message: 'Required' }),
  mail: z.string().optional(),
  jobTitle: z.string().optional(),
})

export type FormSchema = z.infer<typeof schema>
