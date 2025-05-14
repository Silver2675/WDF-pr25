export interface CustomerOptionItem {
  name: string
  id: number
}

export const getCustomerOptions = (items: CustomerOptionItem[]) =>
  items.map((item) => ({
    label: item.name,
    value: item.id,
  }))
