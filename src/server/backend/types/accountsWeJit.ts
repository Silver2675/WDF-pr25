import { z } from "zod";

export const AccountWeJit = z.object({
    id: z.number(),
    name: z.string()
})

export const AccountsWeJit = AccountWeJit.array()

export type AccountsWeJit = z.infer<typeof AccountsWeJit>