export interface AccountsBasicInformation {
  id: number
  name: string
  description: string
  website: string
  deliveryManager: DeliveryManager
}

export interface DeliveryManager {
  id: number
  givenName: string
  surname: string
  mail: string
  isJiter: boolean
}
