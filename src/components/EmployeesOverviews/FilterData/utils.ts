export interface OptionItemForCustomers {
  name: string
  id: number
}

export interface OptionItemForProjects {
  title: string
  id: number
}

export interface OptionItemForEmployees {
  givenName: string
  surname: string
  id: number
}

export const getOptionsForCustomers = (items: OptionItemForCustomers[]) =>
  items.map((item) => ({
    label: item.name,
    value: item.name,
  }))

export const getOptionsForProjects = (items: OptionItemForProjects[]) =>
  items.map((item) => ({
    label: item.title,
    value: item.title,
  }))

export const getOptionsForEmployees = (items: OptionItemForEmployees[]) =>
  items.map((item) => ({
    label: `${item.givenName} ${item.surname}`,
    value: `${item.givenName} ${item.surname}`,
  }))
