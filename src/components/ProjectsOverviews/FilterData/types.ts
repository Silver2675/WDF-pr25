export interface Body {
  employeeId: string
  accountName: string
  name: string
  reporterName: string
  reporterSurname: string
  reportDateStart: string
  reportDateEnd: string
}

export interface Project {
  name: string
  id: number
}

export interface Account {
  name: string
  id: number
}

export interface Employee {
  givenName: string
  surname: string
  id: number
}
