export interface Body {
  gradedEmployeeEmail: string | number
  client: string | number
  project: string | number
  answer: string | number
  grade: string | number
  noteWriter?: string
}

export interface EmployeeData {
  id: number
  title: string
  customerName: string
  customerId: number
}

export interface EmployeesProjectsResponse {
  id: number
  title: string
  customerName: string
  customerId: number
}
