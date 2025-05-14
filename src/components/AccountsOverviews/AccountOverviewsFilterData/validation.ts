import { z } from "zod";

export const schema = z.object({
    accountNames: z
    .union([z.string(), z.array(z.string())])
    .transform((value) => (Array.isArray(value) ? value : [value]))
    .optional().optional(),
    orderBy: z.string().optional(),
})

export type AccountFormSchemaFilter = z.infer<typeof schema>