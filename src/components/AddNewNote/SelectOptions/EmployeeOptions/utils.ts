export interface EmployeeOptionItem {
  givenName: string
  surname: string
  mail: string
  id: number
}

export const getEmployeeOptions = (items: EmployeeOptionItem[]) =>
  items.map((item) => ({
    label: `${item.givenName} ${item.surname}`,
    value: item.mail,
  }))
