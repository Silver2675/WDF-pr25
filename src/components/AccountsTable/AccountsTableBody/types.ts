import { AccountFilters, AccountOverview } from "@/components/AccountsOverviews/types";
import { Dispatch, SetStateAction } from "react";

export interface AccountsTableBodyProps {
    filters: AccountFilters
    fetchData?: () => void
    filterChange?: () => void
    overviews?: AccountOverview[]
    title: string
    setFilters: Dispatch<SetStateAction<AccountFilters>>
    loading: boolean
    handleSortChange: (orderBy: string) => void
}