import { AccountOverview } from '../AccountsOverviews/types'
import { TableColumn } from './types'

export const tableDataOverviews = (
  overviews?: AccountOverview[]
): TableColumn[] | undefined =>
  overviews?.map((overview) => ({
    id: overview.id ?? '-',
    name: overview.name?.trim() ? overview.name : '-',
    deliveryManager:
      overview.deliveryManagerGivenName && overview.deliveryManagerSurname
        ? `${overview.deliveryManagerGivenName} ${overview.deliveryManagerSurname}`
        : '-',
  }))
