import { Account } from "./types";

export const getOptions = (accounts: Account[]) =>
    accounts.map((account) => ({ label: account.name, value: account.id }))