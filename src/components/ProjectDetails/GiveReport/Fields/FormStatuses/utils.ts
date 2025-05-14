import { Statuses } from './types'

export const getOptions = (statuses: Statuses[]) =>
  statuses.map((status) => ({
    label: status.name,
    value: status.id,
  }))
