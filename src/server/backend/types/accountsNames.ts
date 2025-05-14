import { z } from "zod";

export const AccountsName = z.object({
    id: z.number(),
    name: z.string().nullable()
})

export const AccountsNames = AccountsName.array()

export type AccountsNames = z.infer<typeof AccountsNames>