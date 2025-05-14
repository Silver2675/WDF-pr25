import { DeliveryManager } from './types'

export const getOptions = (deliveryManagers: DeliveryManager[]) =>
  deliveryManagers.map((deliveryManager) => ({
    label: `${deliveryManager?.givenName} ${deliveryManager?.surname}`,
    value: deliveryManager.id,
  }))
