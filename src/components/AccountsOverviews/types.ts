export interface AccountOverview {
  id: number
  name: string
  deliveryManagerGivenName?: string
  deliveryManagerSurname?: string
}

export interface Reporter {
  name: string
  surname: string
}

export interface AccountFilters {
  isActive: boolean
  accountName?: string
  orderBy?: string
}

export interface Account {
  id: number
  name: string
  email: string | null
}
