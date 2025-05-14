export interface OptionItem {
  name: string
  id: number
}

export interface OptionItemForEmployees {
  givenName: string
  surname: string
  id: number
}

export const getOptions = (items: OptionItem[]) =>
  items.map((item) => ({
    label: item.name,
    value: item.name,
  }))

export const getOptionsForEmployees = (items: OptionItemForEmployees[]) =>
  items.map((item) => ({
    label: `${item.givenName} ${item.surname}`,
    value: `${item.givenName} ${item.surname}`,
  }))
